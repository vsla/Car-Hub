import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='flex flex-col text-black-100
    mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col
      flex-wrap justify-between gap-5 sm:px15 
      px-6 py-10'>
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" alt='logo'
            width={118}
            height={18}
            className='object-contain'

          />

          <p className='text-base text-gray-700'>
            CarHub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className='footer__links'>
          {footerLinks.map(({
            title, links
          }) => (
            <div key={title} className='footer__link'>
              <h3 className='font-bold'>{title}</h3>
              {links.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className='text-gray-500'>
                  {item.title}
                </Link>
              ))}
            </div>
          )
          )}
        </div>


      </div>

      <div className='flex justify-between
        items-cnter flex-wrap mt-10 border-t
        border-gray sm:px-16 px-6 py-10'>
        <p>@2024 CarHub. All Rights Reserved</p>
        <div className='footer__copyrights-link'>
          <Link className='text-gray-500' href='/'>
            Privacy Policy
          </Link>
          <Link className='text-gray-500' href='/'>
            Terms of Use
          </Link>
        </div>
      </div>

    </footer >
  )
}

export default Footer