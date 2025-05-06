<template>
  <div class="p-4 sm:p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Terms & Privacy</h1>
      <button @click="goBack" class="text-blue-500 font-medium">
        Back to Home
      </button>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Terms of Service</h2>
      <p class="text-gray-600 mb-4">
        Welcome to Music Besties. By accessing or using our service, you agree to be bound by these Terms of Service.
      </p>
      
      <div class="space-y-4 text-gray-600">
        <div>
          <h3 class="font-medium text-gray-700 mb-1">1. Acceptance of Terms</h3>
          <p>
            By accessing or using Music Besties, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
          </p>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-700 mb-1">2. Description of Service</h3>
          <p>
            Music Besties provides a platform for users to create, save, and share rankings of music. We reserve the right to modify or discontinue the service at any time.
          </p>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-700 mb-1">3. User Accounts</h3>
          <p>
            When you create an account with us, you must provide accurate information. You are responsible for maintaining the security of your account.
          </p>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-700 mb-1">4. Content</h3>
          <p>
            Users may submit content to the service. You retain ownership of your content, but grant us a license to use, modify, and display it in connection with the service.
          </p>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-700 mb-1">5. Prohibited Activities</h3>
          <p>
            You may not use the service for any illegal purposes or to violate any laws. You may not interfere with the proper working of the service.
          </p>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Privacy Policy</h2>
      <p class="text-gray-600 mb-4">
        This Privacy Policy describes how we collect, use, and share your personal information when you use our service.
      </p>
      
      <div class="space-y-4 text-gray-600">
        <div>
          <h3 class="font-medium text-gray-700 mb-1">1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us, such as your name, email address, and any content you submit. We also collect information automatically when you use the service.
          </p>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-700 mb-1">2. How We Use Your Information</h3>
          <p>
            We use the information we collect to provide, maintain, and improve our service, to communicate with you, and to protect our service and users.
          </p>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-700 mb-1">3. Sharing Your Information</h3>
          <p>
            We may share your information with third-party vendors who need access to your information to provide services to us. We may also share information in response to legal requests.
          </p>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-700 mb-1">4. Your Choices</h3>
          <p>
            You can access and update certain information about you from within your account settings. You can also request that we delete your account.
          </p>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-700 mb-1">5. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow p-4">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Contact Us</h2>
      <p class="text-gray-600 mb-4">
        If you have any questions about these Terms or Privacy Policy, please contact us:
      </p>
      
      <div class="grid grid-cols-2 gap-2 text-sm">
        <div class="text-gray-500">Email:</div>
        <div class="text-gray-700">legal@musicbesties.example.com</div>
        
        <div class="text-gray-500">Address:</div>
        <div class="text-gray-700">123 Music Street, Melody City, MC 12345</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsView',
  props: {
    params: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    function goBack() {
      emit('go-back');
    }
    
    return {
      goBack
    };
  }
};
</script>
