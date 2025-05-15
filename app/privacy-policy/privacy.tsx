import React from 'react';

function PrivacyPolicy() {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Privacy Policy for Focus Guard Chrome Extension</h1>

      <p><strong>Effective Date:</strong> 15-May-2025</p>

      <h2 className='text-2xl font-bold'>1. Introduction</h2>
      <p>Thank you for using Focus Guard, a Chrome extension developed and provided by Pavish ("we," "us," or "our"). This Privacy Policy explains how Focus Guard collects, uses, and stores information related to your use of the extension. We are committed to protecting your privacy and ensuring transparency in our data practices.</p>

      <h2 className='text-2xl font-bold'>2. Information We Collect</h2>
      <ul>
        <li><strong>User-Defined Tracked Hostnames:</strong> Users can manually input or manage a list of websites they wish for Focus Guard to monitor. This list of tracked hostnames is stored locally within your browser's <code>chrome.storage.local</code>. We do not access or transmit this list.</li>
        <li><strong>Daily Focus Time:</strong> The extension tracks the total time you spend browsing websites on your user-defined tracked list within a single day. This aggregated daily focus time is stored locally in your browser's <code>chrome.storage.local</code>. We do not access or transmit this data.</li>
        <li><strong>Refocus Notification Settings (Implicit):</strong> If you adjust any settings related to how and when refocus notifications are displayed, these preferences may be stored locally within your browser's storage. We do not access or transmit these settings.</li>
        <li><strong>Premium Status (If Applicable):</strong> If you have a premium version of Focus Guard, your premium status (a boolean indicator) may be stored in your browser's <code>chrome.storage.sync</code> to enable premium features. We do not store any payment details directly.</li>
        <li><strong>Daily Nudge Count:</strong> To manage the frequency of refocus notifications for non-premium users, we track the number of notifications displayed per day. This count is stored locally in your browser's <code>chrome.storage.local</code>. We do not access or transmit this data.</li>
        <li><strong>Nudge Date:</strong> The date of the last displayed refocus notification is stored locally in your browser's <code>chrome.storage.local</code> to help manage the daily nudge count. We do not access or transmit this data.</li>
        <li><strong>Temporary Session Time:</strong> When you are actively browsing a website on your tracked list, the time spent on that specific tab session is temporarily stored in your browser's <code>sessionStorage</code>. This data is only active while the tab is open and is not persistently collected by the extension.</li>
      </ul>

      <h2 className='text-2xl font-bold'>3. How We Use the Information</h2>
      <p>The information collected by Focus Guard is used for the following purposes:</p>
      <ul>
        <li>Tracking Focus Time: To monitor and display the time you spend on your self-defined list of tracked websites, helping you understand your browsing habits.</li>
        <li>Triggering Refocus Notifications: To provide timely reminders to refocus based on the time spent on tracked websites, as configured by the extension's default or user settings.</li>
        <li>Enforcing Notification Limits: To ensure that non-premium users receive a limited number of refocus notifications per day.</li>
        <li>Enabling Premium Features (If Applicable): To provide access to premium functionalities for users with a premium subscription.</li>
      </ul>
      <p><strong>Crucially, the data collected by Focus Guard is stored locally within your web browser. We do not transmit this data to any external servers or third parties.</strong></p>

      <h2 className='text-2xl font-bold'>4. Data Storage and Security</h2>
      <p>Focus Guard utilizes the storage capabilities provided by your web browser (<code>chrome.storage.local</code> and <code>sessionStorage</code>) to store the limited data described in Section 2. This means that all collected data resides directly on your computer and is not stored on our servers. The security of this data relies on the security features of your web browser. We do not implement separate server-side security measures as the data does not leave your local environment.</p>

      <h2 className='text-2xl font-bold'>5. Data Retention</h2>
      <ul>
        <li><strong>Tracked Hostnames:</strong> Your list of tracked hostnames is retained locally until you modify or reset it within the Focus Guard extension's settings.</li>
        <li><strong>Daily Focus Time and Nudge Counts:</strong> This data is typically reset at the beginning of each day based on your local time.</li>
        <li><strong>Temporary Session Time:</strong> Data stored in <code>sessionStorage</code> is automatically cleared when you close the corresponding browser tab.</li>
        <li><strong>Premium Status (If Applicable):</strong> Your premium status is retained locally as long as your premium subscription is active (managed through the relevant payment platform).</li>
      </ul>

      <h2 className='text-2xl font-bold'>6. User Rights and Choices</h2>
      <ul>
        {/* <li><strong>Control Over Tracked Hostnames:</strong> You have complete control over the list of websites that Focus Guard tracks. You can add, remove, and modify this list at any time through the extension's interface.</li>
        <li><strong>Control Over Notifications:</strong> You can typically adjust the frequency or disable refocus notifications through the extension's settings (if such options are provided).</li> */}
        <li><strong>Disabling the Extension:</strong> You can disable or uninstall the Focus Guard extension at any time through your Chrome browser's extension management page, which will cease all data collection.</li>
      </ul>

      <h2 className='text-2xl font-bold'>7. Children's Privacy</h2>
      <p>Focus Guard is a general-audience extension designed to enhance productivity. We do not knowingly collect any personal information from children under the age of [Specify Age, e.g., 13] or any age defined by applicable law. If you believe that a child has provided us with personal information, please contact us immediately so that we can take appropriate action.</p>

      <h2 className='text-2xl font-bold'>8. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by updating the effective date at the beginning of this policy and potentially through a notification within the extension or on our website (if applicable). Your continued use of Focus Guard after any such changes constitutes your acceptance of the updated Privacy Policy.</p>

      <h2 className='text-2xl font-bold'>9. Contact Information</h2>
      <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
      <p><a className='text-blue-500' href='mailto:dev.pavish@gmail.com'>dev.pavish@gmail.com</a><br /><a className='text-blue-500' href='https://x.com/pavishdev'>@pavishdev</a></p>
    </div>
  );
}

export default PrivacyPolicy;