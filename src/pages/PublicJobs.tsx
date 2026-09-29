import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@acweb/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@acweb/components/ui/card';
import { Button } from '@acweb/components/ui/button';
import { Badge } from '@acweb/components/ui/badge';
import { Separator } from '@acweb/components/ui/separator';
import { Alert, AlertDescription } from '@acweb/components/ui/alert';
import { Label } from '@acweb/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@acweb/components/ui/select';
import { MultiSelectFilter } from '@acweb/components/ui/multi-select-filter';
import { toast } from 'sonner';
import { Briefcase, MapPin, DollarSign, Calendar, Building, Info, LogIn, Filter, X } from 'lucide-react';
import { format } from 'date-fns';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import UserTypeTabs from '@acweb/components/UserTypeTabs';
import { UserTypeProvider } from '@acweb/contexts/UserTypeContext';
import { US_STATES, POSITION_TYPES, PAGE_SIZE_OPTIONS } from '@acweb/constants/jobFilters';

interface JobPosting {
  id: string;
  job_title: string;
  employer_name: string;
  employer_type: string;
  city: string;
  state: string;
  position_type: string;
  provider_types: string[];
  case_types: string[];
  compensation_range: string;
  schedule_type: string;
  shift_length: string;
  typical_hours: string;
  call_required: string;
  job_summary: string;
  detailed_description: string;
  facility_name: string;
  number_of_ors: number;
  practice_model: string;
  start_date: string;
  published_at: string;
  created_at: string;
}

const PublicJobsContent: React.FC = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [allJobs, setAllJobs] = useState<JobPosting[]>([]); // Store all jobs for filtering
  const [isLoading, setIsLoading] = useState(true);

  // Filter state
  const [selectedProviderTypes, setSelectedProviderTypes] = useState<string[]>([]);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedPositionTypes, setSelectedPositionTypes] = useState<string[]>([]);
  const [pageSize, setPageSize] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Fetch published jobs with filters
  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        // Type assertion needed due to Supabase type definitions
        let query = (supabase
          .from('job_postings' as any)
          .select('*')
          .eq('status', 'published')
          .order('published_at', { ascending: false })) as any;

        // Apply filters with AND logic across fields, OR logic within each field
        
        // Filter by provider types (array field - OR within field)
        if (selectedProviderTypes.length > 0) {
          // For array fields, we need to check if any of the selected values exist in the array
          // Using .overlaps() to check if arrays have any common elements
          query = query.overlaps('provider_types', selectedProviderTypes);
        }

        // Filter by states (single value field - OR within field)
        if (selectedStates.length > 0) {
          query = query.in('state', selectedStates);
        }

        // Filter by position types (single value field - OR within field)
        if (selectedPositionTypes.length > 0) {
          query = query.in('position_type', selectedPositionTypes);
        }

        const { data, error } = await query;
        
        if (error) throw error;
        
        const fetchedJobs = (data || []) as JobPosting[];
        setAllJobs(fetchedJobs);
        
        // Reset to first page when filters change
        setCurrentPage(1);
      } catch (error: any) {
        console.error('Error fetching jobs:', error);
        toast.error('Failed to load job listings');
        setAllJobs([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchJobs();
  }, [selectedProviderTypes, selectedStates, selectedPositionTypes]);

  // Pagination logic
  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return allJobs.slice(startIndex, endIndex);
  }, [allJobs, currentPage, pageSize]);

  const totalPages = useMemo(() => {
    return Math.ceil(allJobs.length / pageSize) || 1;
  }, [allJobs.length, pageSize]);

  // Update displayed jobs when pagination changes
  useEffect(() => {
    setJobs(paginatedJobs);
  }, [paginatedJobs]);

  // Get unique provider types from all jobs for filter options
  const availableProviderTypes = useMemo(() => {
    const types = new Set<string>();
    allJobs.forEach(job => {
      job.provider_types?.forEach(type => types.add(type));
    });
    return Array.from(types).sort();
  }, [allJobs]);

  // Clear all filters
  const handleClearAllFilters = () => {
    setSelectedProviderTypes([]);
    setSelectedStates([]);
    setSelectedPositionTypes([]);
    setCurrentPage(1);
  };

  const hasActiveFilters = selectedProviderTypes.length > 0 || 
                           selectedStates.length > 0 || 
                           selectedPositionTypes.length > 0;

  // Validate filter inputs for security
  const validateFilterInputs = (values: string[], allowedValues: readonly string[]): string[] => {
    return values.filter(v => allowedValues.includes(v as any));
  };

  // Secure filter handlers with validation
  const handleProviderTypesChange = (values: string[]) => {
    const validated = validateFilterInputs(values, availableProviderTypes);
    setSelectedProviderTypes(validated);
  };

  const handleStatesChange = (values: string[]) => {
    const validated = validateFilterInputs(values, US_STATES);
    setSelectedStates(validated);
  };

  const handlePositionTypesChange = (values: string[]) => {
    const validated = validateFilterInputs(values, POSITION_TYPES);
    setSelectedPositionTypes(validated);
  };

  // Handle Send Interest button click - redirect to login
  const handleSendInterest = (jobId: string) => {
    // Store the job ID in sessionStorage so we can redirect back after login
    sessionStorage.setItem('pendingJobInterest', jobId);
    navigate('/login/provider');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <UserTypeTabs />
      <main className="flex-grow pt-48 md:pt-64 pb-12">
        <div className="container-ac">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-ac-primary mb-4">
                Career Opportunity Network
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover exciting career opportunities in anesthesia
              </p>
            </div>

            {/* Info Alert */}
            <Alert className="mb-8 bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                <strong>New to Anesthesia Connect?</strong> Register for an account and upon login on the Dashboard page, 
                please click on the link to enter "Career Opportunity Network" and send interest to the employer.
              </AlertDescription>
            </Alert>

            {/* Filters Section */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <CardTitle className="text-lg">Filters</CardTitle>
                  </div>
                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClearAllFilters}
                      className="text-xs"
                    >
                      <X className="h-3 w-3 mr-1" />
                      Clear All
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Provider Types Filter */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Provider Types</Label>
                    <MultiSelectFilter
                      label="Provider Types"
                      options={availableProviderTypes}
                      selectedValues={selectedProviderTypes}
                      onSelectionChange={handleProviderTypesChange}
                      placeholder="All provider types"
                    />
                  </div>

                  {/* States Filter */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">State</Label>
                    <MultiSelectFilter
                      label="State"
                      options={US_STATES}
                      selectedValues={selectedStates}
                      onSelectionChange={handleStatesChange}
                      placeholder="All states"
                    />
                  </div>

                  {/* Position Types Filter */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Position Type</Label>
                    <MultiSelectFilter
                      label="Position Type"
                      options={POSITION_TYPES}
                      selectedValues={selectedPositionTypes}
                      onSelectionChange={handlePositionTypesChange}
                      placeholder="All position types"
                    />
                  </div>

                  {/* Page Size Selector */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Results per page</Label>
                    <Select
                      value={pageSize.toString()}
                      onValueChange={(value) => {
                        const newPageSize = parseInt(value, 10);
                        setPageSize(newPageSize);
                        setCurrentPage(1); // Reset to first page when page size changes
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {PAGE_SIZE_OPTIONS.map(size => (
                          <SelectItem key={size} value={size.toString()}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Results count */}
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Showing {jobs.length} of {allJobs.length} job{allJobs.length !== 1 ? 's' : ''}
                    {hasActiveFilters && ' (filtered)'}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mb-8 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {/* Jobs List */}
            {isLoading ? (
              <div className="text-center py-12">
                <div className="text-muted-foreground">Loading job listings...</div>
              </div>
            ) : jobs.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    {hasActiveFilters 
                      ? 'No job postings match your current filters. Try adjusting your search criteria.'
                      : 'No job postings available at this time. Please check back later.'}
                  </p>
                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleClearAllFilters}
                      className="mt-4"
                    >
                      Clear Filters
                    </Button>
                  )}
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {jobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-2xl">{job.job_title}</CardTitle>
                            <Badge variant="default" className="bg-green-600">
                              Published
                            </Badge>
                          </div>
                          <CardDescription>
                            <div className="flex flex-wrap items-center gap-4 mt-2">
                              <span className="flex items-center gap-1">
                                <Building className="h-4 w-4" />
                                {job.employer_name} ({job.employer_type})
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {job.city}, {job.state}
                              </span>
                              <span className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                {job.position_type}
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4" />
                                {job.compensation_range}
                              </span>
                              {job.start_date && (
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  Start: {format(new Date(job.start_date), 'MMM dd, yyyy')}
                                </span>
                              )}
                            </div>
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleSendInterest(job.id)}
                            className="flex items-center gap-2"
                          >
                            <LogIn className="h-4 w-4" />
                            Send Interest
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <Separator className="mb-4" />
                      
                      {/* Job Summary */}
                      {job.job_summary && (
                        <div className="mb-4">
                          <h3 className="font-semibold mb-2">Job Summary</h3>
                          <p className="text-sm text-muted-foreground">{job.job_summary}</p>
                        </div>
                      )}

                      {/* Key Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {job.facility_name && (
                          <div>
                            <span className="text-sm font-semibold">Facility: </span>
                            <span className="text-sm text-muted-foreground">{job.facility_name}</span>
                          </div>
                        )}
                        {job.provider_types && job.provider_types.length > 0 && (
                          <div>
                            <span className="text-sm font-semibold">Provider Types: </span>
                            <span className="text-sm text-muted-foreground">
                              {job.provider_types.join(', ')}
                            </span>
                          </div>
                        )}
                        {job.schedule_type && (
                          <div>
                            <span className="text-sm font-semibold">Schedule: </span>
                            <span className="text-sm text-muted-foreground">{job.schedule_type}</span>
                          </div>
                        )}
                        {job.shift_length && (
                          <div>
                            <span className="text-sm font-semibold">Shift Length: </span>
                            <span className="text-sm text-muted-foreground">{job.shift_length}</span>
                          </div>
                        )}
                        {job.practice_model && (
                          <div>
                            <span className="text-sm font-semibold">Practice Model: </span>
                            <span className="text-sm text-muted-foreground">{job.practice_model}</span>
                          </div>
                        )}
                        {job.call_required && (
                          <div>
                            <span className="text-sm font-semibold">Call Required: </span>
                            <span className="text-sm text-muted-foreground">{job.call_required}</span>
                          </div>
                        )}
                      </div>

                      {/* Case Types */}
                      {job.case_types && job.case_types.length > 0 && (
                        <div className="mb-4">
                          <span className="text-sm font-semibold">Case Types: </span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {job.case_types.slice(0, 6).map((type, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {type}
                              </Badge>
                            ))}
                            {job.case_types.length > 6 && (
                              <Badge variant="secondary" className="text-xs">
                                +{job.case_types.length - 6} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Detailed Description (truncated) */}
                      {job.detailed_description && (
                        <div className="mb-4">
                          <h3 className="font-semibold mb-2">Description</h3>
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {job.detailed_description}
                          </p>
                        </div>
                      )}

                      {/* Published Date */}
                      <div className="text-xs text-muted-foreground mt-4 pt-4 border-t">
                        Posted: {format(new Date(job.published_at), 'MMM dd, yyyy')}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Call to Action */}
            {jobs.length > 0 && (
              <div className="mt-8 text-center">
                <Card className="bg-ac-secondary text-white border-0">
                  <CardContent className="py-8">
                    <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
                    <p className="text-blue-100 mb-6">
                      Sign in or create an account to send your interest to employers
                    </p>
                    <Button
                      onClick={() => navigate('/login/provider')}
                      variant="default"
                      size="lg"
                      className="bg-white text-ac-primary hover:bg-blue-50"
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      Sign In or Register
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const PublicJobs: React.FC = () => {
  return (
    <UserTypeProvider>
      <PublicJobsContent />
    </UserTypeProvider>
  );
};

export default PublicJobs;

