import { Github, Mail } from 'lucide-react';
import { SiX } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 Yuuri Inoue
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/yuuri-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com/yuuri5117"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <SiX size={18} />
              <span className="sr-only">X</span>
            </a>
            <a
              href="https://note.com/yuuri935"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-bold leading-5"
            >
              note
            </a>
            <a
              href="mailto:yuuri5117@gmail.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
