
export function Nav() {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        <li className="#111 hover:text-accent cursor-pointer">
          <a href="/">home</a>
        </li>
        <li>
          <a href="/">Category</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
