import { Link } from 'next-view-transitions';
import AcmeLogo from '../acme-logo';

export function AnimatedName() {
  return (
    <div>
      <Link href="/" className="flex mb-8 font-medium text-gray-400 fade-in">
        vimAl kumar
      </Link>
      <AcmeLogo/>
    </div>

  );
}
