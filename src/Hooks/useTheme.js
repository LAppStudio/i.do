import {useSelector} from 'react-redux';
import {Selectors} from '../theme/reducer';
import pallet from '../appassets/pallet.json';
import measures from '../appassets/measures.json';
import typography from '../appassets/typography.json';

export default function Theme() {
  const selectedTheme = useSelector(Selectors.selected);

  const colors = pallet[selectedTheme] ?? pallet.VANILLA;

  return {colors, measures, typography};
}