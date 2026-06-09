import xeroxLogo from '../brands/xerox.png';
import ricohLogo from '../brands/ricoh.png';
import epsonLogo from '../brands/epson.png';
import toshibaLogo from '../brands/toshiba.png';
import canonLogo from '../brands/canon.png';
import brotherLogo from '../brands/brother.png';
import hpLogo from '../brands/hp.png';
import rolandLogo from '../brands/roland.png';
import slapLogo from '../brands/fespa.png';

export interface Brand {
  id: string;
  name: string;
  logo: string;
  /** Logo file has a dark background — use a light tile for contrast */
  darkLogo?: boolean;
}

export const compatibleBrands: Brand[] = [
  { id: 'canon', name: 'Canon', logo: canonLogo },
  { id: 'epson', name: 'Epson', logo: epsonLogo },
  { id: 'brother', name: 'Brother', logo: brotherLogo, darkLogo: true },
  { id: 'hp', name: 'HP', logo: hpLogo, darkLogo: true },
  { id: 'xerox', name: 'Xerox', logo: xeroxLogo },
  { id: 'ricoh', name: 'Ricoh', logo: ricohLogo },
  { id: 'toshiba', name: 'Toshiba', logo: toshibaLogo },
  { id: 'roland', name: 'Roland', logo: rolandLogo },
  {
    id: 'slap',
    name: 'SLAP',
    logo: slapLogo,
    darkLogo: true,
  },
];
