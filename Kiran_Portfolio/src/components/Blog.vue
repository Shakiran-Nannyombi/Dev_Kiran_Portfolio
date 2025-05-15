<template>
  <div id="content-wrapper" class="relative z-2 min-h-screen w-full">
    <div class="bg-pattern-light dark:bg-pattern-dark">
      <!-- Hero Section -->
      <section class="relative py-20 overflow-hidden">
        <div class="container mx-auto px-8">
          <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Blog & Articles
            </h1>
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Exploring technology, development insights, and creative solutions
            </p>
          </div>
        </div>
      </section>

      <!-- Featured Posts Section -->
      <section class="py-20">
        <div class="container mx-auto px-8">
          <h2 class="text-3xl font-bold text-primary dark:text-dark-primary mb-12" data-aos="fade-up">Featured Posts</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Featured Post 1 -->
            <div v-for="post in featuredPosts" :key="post.title" 
                 class="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-sm" 
                 data-aos="fade-up">
              <div class="relative aspect-video overflow-hidden">
                <!-- Image placeholder -->
                <div class="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              </div>
              <div class="p-6">
                <div class="flex gap-2 mb-4">
                  <span class="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-dark-primary/10 dark:text-dark-primary">
                    {{ post.category }}
                  </span>
                  <span v-for="tag in post.tags" :key="tag" 
                        class="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary dark:bg-dark-secondary/10 dark:text-dark-secondary">
                    {{ tag }}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-text dark:text-dark-text mb-2">{{ post.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">{{ post.excerpt }}</p>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div>
                    <p class="font-medium text-text dark:text-dark-text">{{ post.author }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ post.date }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Recent Posts Section -->
      <section class="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div class="container mx-auto px-8">
          <h2 class="text-3xl font-bold text-primary dark:text-dark-primary mb-12" data-aos="fade-up">Recent Posts</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Recent Post -->
            <div v-for="(post, index) in recentPosts" :key="post.title" 
                 class="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-sm" 
                 data-aos="fade-up" 
                 :data-aos-delay="index * 100">
              <div class="relative aspect-video overflow-hidden">
                <!-- Image placeholder -->
                <div class="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              </div>
              <div class="p-6">
                <div class="flex gap-2 mb-4">
                  <span class="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-dark-primary/10 dark:text-dark-primary">
                    {{ post.category }}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-text dark:text-dark-text mb-2">{{ post.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">{{ post.excerpt }}</p>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div>
                    <p class="font-medium text-text dark:text-dark-text">{{ post.author }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ post.date }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="py-20">
        <div class="container mx-auto px-8">
          <h2 class="text-3xl font-bold text-primary dark:text-dark-primary mb-12" data-aos="fade-up">Categories</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <!-- Category -->
            <div v-for="(category, index) in categories" :key="category.name" 
                 class="p-6 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group" 
                 data-aos="fade-up" 
                 :data-aos-delay="index * 100">
              <div class="flex flex-col items-center text-center gap-4">
                <div class="w-16 h-16 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-primary dark:text-dark-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold">{{ category.name }}</h3>
                <p class="text-gray-600 dark:text-gray-400">{{ category.count }} Articles</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import '../assets/css/animations.css'
import { initTextAnimations } from '../assets/js/text-animations.js'

export default {
  name: 'Blog',
  data() {
    return {
      featuredPosts: [
        {
          title: 'Getting Started with Vue.js',
          excerpt: 'Learn the fundamentals of Vue.js and build your first application...',
          category: 'Web Development',
          tags: ['Vue.js'],
          author: 'Dev_Kiran',
          date: 'March 15, 2024'
        },
        {
          title: 'Data Analysis with Python',
          excerpt: 'A comprehensive guide to data analysis using Python libraries...',
          category: 'Data Science',
          tags: ['Python'],
          author: 'Dev_Kiran',
          date: 'March 10, 2024'
        }
      ],
      recentPosts: [
        {
          title: 'Design Principles',
          excerpt: 'Essential design principles for creating beautiful interfaces...',
          category: 'UI/UX',
          author: 'Dev_Kiran',
          date: 'March 5, 2024'
        },
        {
          title: 'Modern JavaScript',
          excerpt: 'Exploring modern JavaScript features and best practices...',
          category: 'JavaScript',
          author: 'Dev_Kiran',
          date: 'March 1, 2024'
        },
        {
          title: 'CI/CD Pipeline',
          excerpt: 'Setting up efficient CI/CD pipelines for your projects...',
          category: 'DevOps',
          author: 'Dev_Kiran',
          date: 'February 25, 2024'
        }
      ],
      categories: [
        { name: 'Web Development', count: 12, icon: 'code' },
        { name: 'Data Science', count: 8, icon: 'chart' },
        { name: 'UI/UX Design', count: 6, icon: 'design' },
        { name: 'DevOps', count: 4, icon: 'server' }
      ]
    }
  },
  mounted() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        once: false,
        offset: 100,
        delay: 100,
        easing: 'ease-out',
        mirror: true,
        anchorPlacement: 'top-bottom'
      });
    }
    // Initialize text animations
    initTextAnimations()
  }
}
</script>

<style scoped>
/* Component specific styles */
</style>
