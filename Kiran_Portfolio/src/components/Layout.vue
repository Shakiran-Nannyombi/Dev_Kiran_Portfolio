<template>
  <div class="min-h-screen flex flex-col">
    <!-- Main Content -->
    <main class="flex-grow">
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="bg-background dark:bg-gray-800 py-16 border-t border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Logo and Description -->
          <div class="col-span-1">
            <router-link to="/" class="text-2xl font-bold text-text dark:text-dark-text hover:text-primary dark:hover:text-dark-primary transition-colors duration-300">Dev_Kiran</router-link>
            <p class="mt-4 text-text/80 dark:text-dark-text/80 max-w-md">Have a project in mind or just want to say hello? I'd love to hear from you. Let's create something amazing together.</p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold text-text dark:text-dark-text mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><router-link to="/" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300">Home</router-link></li>
              <li><router-link to="/about" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300">About</router-link></li>
              <li><router-link to="/skills" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300">Skills</router-link></li>
              <li><router-link to="/projects" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300">Projects</router-link></li>
              <li><router-link to="/experience" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300">Experience</router-link></li>
              <li><router-link to="/services" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300">Services</router-link></li>
              <li><router-link to="/contact" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300">Contact</router-link></li>
              <li><router-link to="/blog" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300">Blog</router-link></li>
            </ul>
          </div>

          <!-- Social Links -->
          <div>
            <h3 class="text-lg font-semibold text-text dark:text-dark-text mb-4">Social Media</h3>
            <ul class="space-y-2">
              <li>
                <a href="https://github.com/Shakiran-Nannyombi" target="_blank" rel="noopener noreferrer" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://x.com/Shaki1Nannyombi" target="_blank" rel="noopener noreferrer" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shakiran-nannyombi-401057222" target="_blank" rel="noopener noreferrer" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://medium.com/@devkiran256" target="_blank" rel="noopener noreferrer" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path>
                  </svg>
                  Medium
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold text-text dark:text-dark-text mb-4">Contact</h3>
            <ul class="space-y-2">
              <li>
                <a href="mailto:shakirannannyombi@gmail.com" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  shakirannannyombi@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:devkiran256@gmail.com" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  devkiran256@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+256770522627" class="text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors duration-300 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +256-770-522-627
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div class="flex justify-center">
            <p class="text-text/80 dark:text-dark-text/80 text-sm">© 2025 Shakiran Nannyombi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script> 