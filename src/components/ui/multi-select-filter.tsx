import React from 'react';
import { Button } from '@acweb/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@acweb/components/ui/popover';
import { Checkbox } from '@acweb/components/ui/checkbox';
import { Label } from '@acweb/components/ui/label';
import { Badge } from '@acweb/components/ui/badge';
import { ChevronDown, X } from 'lucide-react';
import { cn } from '@acweb/lib/utils';

interface MultiSelectFilterProps {
  label: string;
  options: readonly string[];
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
  placeholder?: string;
  className?: string;
  maxDisplayCount?: number;
}

export const MultiSelectFilter: React.FC<MultiSelectFilterProps> = ({
  label,
  options,
  selectedValues,
  onSelectionChange,
  placeholder = 'Select options',
  className,
  maxDisplayCount = 2
}) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = (value: string) => {
    const newSelection = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];
    onSelectionChange(newSelection);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectionChange([]);
  };

  const displayText = selectedValues.length === 0
    ? placeholder
    : selectedValues.length <= maxDisplayCount
    ? selectedValues.join(', ')
    : `${selectedValues.length} selected`;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between text-left font-normal",
            !selectedValues.length && "text-muted-foreground",
            className
          )}
        >
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="truncate">{displayText}</span>
            {selectedValues.length > 0 && (
              <Badge variant="secondary" className="ml-auto shrink-0">
                {selectedValues.length}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            {selectedValues.length > 0 && (
              <X
                className="h-4 w-4 opacity-50 hover:opacity-100"
                onClick={handleClear}
              />
            )}
            <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
        <div className="p-2">
          <Label className="px-2 py-1.5 text-sm font-semibold">{label}</Label>
          <div className="max-h-[300px] overflow-y-auto mt-2">
            {options.length === 0 ? (
              <div className="px-2 py-4 text-sm text-muted-foreground text-center">
                No options available
              </div>
            ) : (
              <div className="space-y-1">
                {options.map((option) => {
                  const isSelected = selectedValues.includes(option);
                  const optionId = `filter-${option}`;
                  
                  // Handle click on the entire row - make the whole row clickable
                  const handleRowClick = (e: React.MouseEvent) => {
                    // If clicking directly on the checkbox button, let it handle natively
                    const target = e.target as HTMLElement;
                    if (target.closest('button[role="checkbox"]') || target.id === optionId) {
                      return; // Let the checkbox handle it via onCheckedChange
                    }
                    // For clicks anywhere else on the row (including label text), toggle manually
                    e.preventDefault();
                    handleToggle(option);
                  };

                  return (
                    <div
                      key={option}
                      className="flex items-center space-x-2 px-2 py-1.5 rounded-sm hover:bg-accent cursor-pointer"
                      onClick={handleRowClick}
                    >
                      <Checkbox
                        id={optionId}
                        checked={isSelected}
                        onCheckedChange={() => handleToggle(option)}
                      />
                      <Label
                        htmlFor={optionId}
                        className="flex-1 text-sm font-normal cursor-pointer select-none"
                        onClick={(e) => {
                          // Prevent the htmlFor from triggering checkbox and stop propagation to row
                          e.preventDefault();
                          e.stopPropagation();
                          handleToggle(option);
                        }}
                      >
                        {option}
                      </Label>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {selectedValues.length > 0 && (
            <div className="mt-2 pt-2 border-t">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs"
                onClick={handleClear}
              >
                Clear selection
              </Button>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

