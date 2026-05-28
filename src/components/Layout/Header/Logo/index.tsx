import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link
      href="/"
      className='text-2xl font-bold text-midnight_text dark:text-white'>
      Harikrishnan N
    </Link>
  );
};

export default Logo;
