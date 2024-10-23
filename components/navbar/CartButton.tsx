import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';

export const CartButton = () => {
  const numItemsInCart = 9;
  return (
    <Button
      asChild
      size='icon'
      variant='outline'
      className='relative flex items-center justify-center'
    >
      <Link href='/cart'>
        <LuShoppingCart />
        <span className='absolute -top-3 -right-3 w-6 h-6 bg-primary text-white rounded-full text-xs flex items-center justify-center'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};
