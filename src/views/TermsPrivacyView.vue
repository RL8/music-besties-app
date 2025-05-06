<template>
  <div class="p-4 sm:p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Terms & Privacy</h1>
      <button @click="$router.push('/')" class="text-blue-500 font-medium">
        Back to Home
      </button>
    </div>

    <!-- Navigation Tabs -->
    <div class="flex border-b border-gray-200 mb-6">
      <button 
        @click="activeTab = 'terms'" 
        class="py-2 px-4 font-medium text-sm transition-colors"
        :class="activeTab === 'terms' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'"
      >
        Terms of Service
      </button>
      <button 
        @click="activeTab = 'privacy'" 
        class="py-2 px-4 font-medium text-sm transition-colors"
        :class="activeTab === 'privacy' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'"
      >
        Privacy Policy
      </button>
      <button 
        @click="activeTab = 'cookies'" 
        class="py-2 px-4 font-medium text-sm transition-colors"
        :class="activeTab === 'cookies' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'"
      >
        Cookie Policy
      </button>
    </div>

    <!-- Terms of Service Content -->
    <div v-if="activeTab === 'terms'" class="bg-white rounded-lg shadow p-4 mb-6">
      <div class="mb-6">
        <h2 class="text-lg font-semibold text-gray-700 mb-2">Terms of Service</h2>
        <p class="text-xs text-gray-500 mb-4">Last updated: May 6, 2025</p>
        
        <div class="prose prose-sm max-w-none text-gray-600">
          <p>
            Welcome to Music Besties. By accessing or using our service, you agree to be bound by these Terms of Service.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">1. Acceptance of Terms</h3>
          <p>
            By accessing or using the Music Besties application ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
            If you disagree with any part of the terms, you may not access the Service.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">2. Description of Service</h3>
          <p>
            Music Besties is a web application that allows users to rank and review music. The Service may include features 
            for creating, saving, and sharing music rankings and reviews.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">3. User Accounts</h3>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
            Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">4. Intellectual Property</h3>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of 
            Music Besties and its licensors. The Service is protected by copyright, trademark, and other laws.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">5. User Content</h3>
          <p>
            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, 
            or other material ("Content"). You are responsible for the Content that you post on or through the Service.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">6. Termination</h3>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
            including without limitation if you breach the Terms.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">7. Limitation of Liability</h3>
          <p>
            In no event shall Music Besties, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
            for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, 
            data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">8. Changes to Terms</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material 
            we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">9. Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us at terms@musicbesties.example.com.
          </p>
        </div>
      </div>
    </div>

    <!-- Privacy Policy Content -->
    <div v-if="activeTab === 'privacy'" class="bg-white rounded-lg shadow p-4 mb-6">
      <div class="mb-6">
        <h2 class="text-lg font-semibold text-gray-700 mb-2">Privacy Policy</h2>
        <p class="text-xs text-gray-500 mb-4">Last updated: May 6, 2025</p>
        
        <div class="prose prose-sm max-w-none text-gray-600">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">1. Information We Collect</h3>
          <p>
            We collect information that you provide directly to us, such as when you create an account, update your profile, 
            use interactive features, participate in contests, surveys, or other promotions, or communicate with us.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">2. How We Use Your Information</h3>
          <p>
            We may use information about you for various purposes, including to:
          </p>
          <ul class="list-disc pl-5 my-2">
            <li>Provide, maintain, and improve our Service</li>
            <li>Provide and deliver the products and services you request</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, offers, promotions, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Service</li>
          </ul>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">3. Sharing of Information</h3>
          <p>
            We may share information about you as follows:
          </p>
          <ul class="list-disc pl-5 my-2">
            <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
            <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
            <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of Music Besties or others</li>
          </ul>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">4. Data Storage</h3>
          <p>
            We primarily store your information locally on your device using browser local storage. This means your data remains on your device 
            and is not transmitted to our servers unless you explicitly choose to share it.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">5. Your Choices</h3>
          <p>
            You can access and update certain information about you from within the Service. You can also request that we delete your account 
            and associated data at any time by contacting us.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">6. Changes to this Policy</h3>
          <p>
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">7. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@musicbesties.example.com.
          </p>
        </div>
      </div>
    </div>

    <!-- Cookie Policy Content -->
    <div v-if="activeTab === 'cookies'" class="bg-white rounded-lg shadow p-4 mb-6">
      <div class="mb-6">
        <h2 class="text-lg font-semibold text-gray-700 mb-2">Cookie Policy</h2>
        <p class="text-xs text-gray-500 mb-4">Last updated: May 6, 2025</p>
        
        <div class="prose prose-sm max-w-none text-gray-600">
          <p>
            This Cookie Policy explains how Music Besties uses cookies and similar technologies to recognize you when you visit our website.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">1. What are cookies?</h3>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
            Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
            as well as to provide reporting information.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">2. How we use cookies</h3>
          <p>
            We use cookies for the following purposes:
          </p>
          <ul class="list-disc pl-5 my-2">
            <li>To enable certain functions of the Service</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>To enable advertisements delivery, including behavioral advertising</li>
          </ul>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">3. Types of cookies we use</h3>
          <p>
            We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:
          </p>
          <ul class="list-disc pl-5 my-2">
            <li><strong>Essential cookies.</strong> These cookies are required for the operation of our website and enable you to use its features.</li>
            <li><strong>Analytical/performance cookies.</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
            <li><strong>Functionality cookies.</strong> These are used to recognize you when you return to our website.</li>
            <li><strong>Targeting cookies.</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed.</li>
          </ul>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">4. How to control cookies</h3>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. 
            If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
          </p>
          
          <h3 class="text-base font-medium text-gray-700 mt-4 mb-2">5. Contact Us</h3>
          <p>
            If you have any questions about our use of cookies, please contact us at cookies@musicbesties.example.com.
          </p>
        </div>
      </div>
    </div>

    <p class="text-xs text-gray-400 mt-8 text-center px-4 pb-4">
      This app is unofficial and not affiliated with any music artists or rights management companies.
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TermsPrivacyView',
  setup() {
    // Active tab state (terms, privacy, cookies)
    const activeTab = ref('terms');
    
    return {
      activeTab
    };
  }
};
</script>
