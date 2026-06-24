// কন্টাক্ট ফর্ম সাবমিট হ্যান্ডলার (অ্যাডভান্সড ইন্টারঅ্যাকশন)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const button = this.querySelector('button');

    // বাটন টেক্সট অ্যানিমেশন ইফেক্ট
    button.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
    button.style.pointerEvents = 'none';

    setTimeout(() => {
        alert(`Hello ${name}, thank you for reaching out! Your message simulation is successful.`);
        button.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        button.style.pointerEvents = 'auto';
        this.reset();
    }, 2000); // ২ সেকেন্ডের একটি ফেক লোডিং টাইম
});