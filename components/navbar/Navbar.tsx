import { Container } from '@/components/global/Container';
import { CartButton } from '@/components/navbar/CartButton';
import { ModeToggle } from '@/components/navbar/DarkMode';
import { LinksDropdown } from '@/components/navbar/LinksDropdown';
import { Logo } from '@/components/navbar/Logo';
import { NavSearch } from '@/components/navbar/NavSearch';

export const Navbar = () => {
  return (
    <nav className='border-b'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center sm:gap-4 sm:flex-wrap py-8'>
        <Logo />
        <NavSearch />
        <div className='flex items-center gap-4'>
          <CartButton />
          <ModeToggle />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};
