import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, SortAsc, Grid, Plus } from "lucide-react";
import { useRef } from 'react';
import * as React from "react";
import { useSearchParams } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SearchControls = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const [searchParams, setSearchParams] = useSearchParams([]);

  const filterStatus = searchParams.get("active-accordion") ?? "";
  const slideValue = Number(searchParams.get("strength") ?? 5);

  const queryParams = (key:string, value:string) => 
    setSearchParams((prev) => {
    prev.set(key, value);
    return prev;
  });

  const toggleAccordion = () => {
    if(filterStatus === "active-filters"){
      queryParams("active-accordion", "non-active");
      return;
    };
      queryParams("active-accordion", "active-filters");    
    };
                 

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const value = inputRef.current?.value ?? "";
      queryParams("name", value);
    }
  };


  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search heroes, villains, powers, teams..."
            className="bg- white pl-12 h-12 text-lg"
            ref={inputRef}
            onKeyDown={handleKeyDown}
            defaultValue={searchParams?.get("name") ?? ""}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button 
            variant={ filterStatus==="active-filters" ? "default" : "outline"} 
            className="h-12"
            onClick={toggleAccordion}
            >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <Button variant="outline" className="h-12">
            <SortAsc className="h-4 w-4 mr-2" />
            Sort by Name
          </Button>

          <Button variant="outline" className="h-12">
            <Grid className="h-4 w-4" />
          </Button>

          <Button className="h-12">
            <Plus className="h-4 w-4 mr-2" />
            Add Character
          </Button>
        </div>
      </div>

      {/*Advanced filters*/}
      <Accordion type="single" collapsible value={filterStatus}>
        <AccordionItem value="active-filters">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Advanced Filters</h3>
                <Button variant="ghost">Clear All</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Team</label>
                  <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    All teams
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    All categories
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Universe</label>
                  <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    All universes
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    All statuses
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium">
                  Minimum Strength: {slideValue}/10
                </label>
                <Slider 
                defaultValue={[slideValue]} 
                onValueChange={(value) => queryParams("strength", value[0].toString())}
                max={10} 
                step={1} 
                />

              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SearchControls;
