import { Input } from '@/components/ui/input';

export const NavSearch = () => {
  return (
    <Input
      type='search'
      placeholder='search product...'
      className='max-w-sm dark:bg-muted'
    />
  );
};
