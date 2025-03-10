import {
  hin115_font, ing115_font, bangla115_font, telugu115_font,
  mlyalm115_font, tmil115_font, kannada115_font, odia115_font,
  sinhala115_font, pnzabi115_font, guzrati115_font, binaryvertical115_font
} from '@/fonts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const FontPicker: React.FC = () => {
  const handlevaluechange = (selval:string) => {
    document.body.className = '';  
    const v_to_f = (sval: string): string => {
      switch (sval) {
        case '0': return ing115_font.className;
        case '1': return hin115_font.className;
        case '2': return bangla115_font.className;
        case '3': return telugu115_font.className;
        case '4': return mlyalm115_font.className;
        case '5': return tmil115_font.className;      
        case '6': return kannada115_font.className;
        case '7': return odia115_font.className;
        case '8': return sinhala115_font.className;
        case '9': return pnzabi115_font.className;
        case 'L': return guzrati115_font.className;
        case 'J': return binaryvertical115_font.className;
        default: return ing115_font.className;
      }
    }
    const sf = v_to_f(selval);
    document.body.classList.add(sf);  
    document.body.classList.add("antialiased");  
  };
  return (
      <Select onValueChange={handlevaluechange}>
        <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="font" />
        </SelectTrigger>
        <SelectContent className="overflow-y-auto max-h-[16rem]">
          <SelectItem value='0'>iNg115_font</SelectItem>
          <SelectItem value='1'>hin115_font</SelectItem>
          <SelectItem value='2'>bangla115_font</SelectItem>
          <SelectItem value='3'>telugu115_font</SelectItem>
          <SelectItem value='4'>mlyalm115_font</SelectItem>
          <SelectItem value='5'>tmil115_font</SelectItem>
          <SelectItem value='6'>kannada115_font</SelectItem>
          <SelectItem value='7'>odia115_font</SelectItem>
          <SelectItem value='8'>sinhala115_font</SelectItem>
          <SelectItem value='9'>pnzabi115_font</SelectItem>
          <SelectItem value='L'>guzrati115_font</SelectItem>
          <SelectItem value='J'>binaryvertical115_font</SelectItem>
        </SelectContent>
      </Select>
  );
};

export default FontPicker;