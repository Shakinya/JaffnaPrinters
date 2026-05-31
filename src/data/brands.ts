import xeroxLogo from '../brands/xerox.png';
import ricohLogo from '../brands/ricoh.png';
import epsonLogo from '../brands/epson.png';
import toshibaLogo from '../brands/toshiba.png';
import canonLogo from '../brands/canon.png';

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export const compatibleBrands: Brand[] = [
  { id: 'xerox', name: 'Xerox', logo: xeroxLogo },
  { id: 'ricoh', name: 'Ricoh', logo: ricohLogo },
  { id: 'epson', name: 'Epson', logo: epsonLogo },
  { id: 'toshiba', name: 'Toshiba', logo: toshibaLogo },
  { id: 'canon', name: 'Canon', logo: canonLogo },
];
