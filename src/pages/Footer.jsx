import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-white px-6 py-10 sm:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Column: Name and About */}
        <div>
          <h3 className="text-xl text-black font-bold mb-4">Znorm Homes</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We aim to redefine industry standards by delivering innovative solutions
            that empower businesses and individuals to reach their full potential.
          </p>
        </div>

        {/* Column 2: Company Links */}
        <div className="ml-4 sm:ml-6 lg:ml-8">
  <h4 className="text-lg text-black font-semibold mb-4">Company</h4>
  <ul className="space-y-2">
    <li>
      <a href="/about" className="text-gray-400 hover:text-black">
        About
      </a>
    </li>
    <li>
      <a href="/gallery" className="text-gray-400 hover:text-black">
        Gallery
      </a>
    </li>
    <li>
      <a href="/blog" className="text-gray-400 hover:text-black">
        Blog
      </a>
    </li>
  </ul>
</div>

        {/* Column 3: Information Links */}
        <div>
          <h4 className="text-lg text-black font-semibold mb-4">Information</h4>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="text-gray-400 hover:text-black">
                FAQ
              </a>
            </li>
            <li>
              <a href="/data-rights" className="text-gray-400 hover:text-black">
                Data Rights
              </a>
            </li>
            <li>
              <a href="/terms" className="text-gray-400 hover:text-black">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-lg text-black font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="text-gray-400">
              <span className="font-semibold">Phone:</span> +1 (123) 456-7890
            </li>
            <li className="text-gray-400">
              <span className="font-semibold">Email:</span> contact@company.com
            </li>
            <li className="text-gray-400">
              <span className="font-semibold">Address:</span> 123 Business Lane, Suite 100
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Znorm Homes. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
