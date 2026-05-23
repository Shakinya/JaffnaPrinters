import komoriLogo from '../brands/komori.png';
import rolandLogo from '../brands/roland.png';
import manrolandLogo from '../brands/manroland.png';
import hpLogo from '../brands/hp.png';
import canonLogo from '../brands/canon.png';

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export const compatibleBrands: Brand[] = [
  { id: 'komori', name: 'Komori', logo: komoriLogo },
  { id: 'roland', name: 'Roland', logo: rolandLogo },
  { id: 'manroland', name: 'Manroland', logo: manrolandLogo },
  { id: 'hp', name: 'HP', logo: hpLogo },
  { id: 'canon', name: 'Canon', logo: canonLogo },
];
