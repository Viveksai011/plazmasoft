import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Dropdownselect = ({ setUseCase, useCase }) => {
  return (
    <Select value={useCase} onValueChange={setUseCase}>
      <SelectTrigger className="w-[180px] text-black    ">
        <SelectValue placeholder="Select a Prompt Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-black  ">
          <SelectItem value="Prompt Generator">Prompt Generator</SelectItem>
          <SelectItem value="Story">Story</SelectItem>
          <SelectItem value="Code">Code</SelectItem>
          <SelectItem value="Creativity">Creativity</SelectItem>
          <SelectItem value="Optimize Prompt">Optimize Prompt</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Dropdownselect;
