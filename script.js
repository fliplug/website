// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Dynamic footer copyright with current date & time
    const footerCopyright =
        document.querySelector('.footer-bottom p');
    if (footerCopyright) {
        const now = new Date();
        const formatted = now.getFullYear();
        footerCopyright.textContent =
            `© ${formatted} Fliplug. All rights reserved.`;
    }

    // Dashboard Sidebar Navigation
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const dashboardSections = document.querySelectorAll('.dashboard-section');
    
    sidebarItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            
            // Update active states
            sidebarItems.forEach(si => si.classList.remove('active'));
            this.classList.add('active');
            
            dashboardSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Identity Verification Tabs
    const verificationTabs = document.querySelectorAll('.verification-tab');
    const verificationContents = document.querySelectorAll('.verification-content');
    
    verificationTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active states
            verificationTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            verificationContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}-verification`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Email Verification Form
    const emailForm = document.getElementById('email-verify-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email-input').value;
            const resultDiv = document.getElementById('email-result');
            
            // Simulate API call
            setTimeout(() => {
                const isValid = validateEmail(email);
                const isDisposable = checkDisposableEmail(email);
                const domain = email.split('@')[1];
                
                let resultHTML = '';
                if (isValid && !isDisposable) {
                    resultHTML = `
                        <div class="result-success">
                            <h3><i class="fas fa-check-circle"></i> Email Verified</h3>
                            <p><strong>Status:</strong> Valid email address</p>
                            <p><strong>Domain:</strong> ${domain}</p>
                            <p><strong>Format:</strong> Valid</p>
                            <p><strong>Disposable:</strong> No</p>
                            <p><strong>MX Record:</strong> Valid</p>
                            <p><strong>SMTP:</strong> Verified</p>
                        </div>
                    `;
                } else if (isDisposable) {
                    resultHTML = `
                        <div class="result-error">
                            <h3><i class="fas fa-exclamation-triangle"></i> Disposable Email Detected</h3>
                            <p>This email address is from a disposable email service and may not be reliable.</p>
                        </div>
                    `;
                } else {
                    resultHTML = `
                        <div class="result-error">
                            <h3><i class="fas fa-times-circle"></i> Invalid Email</h3>
                            <p>The email address format is invalid.</p>
                        </div>
                    `;
                }
                
                resultDiv.innerHTML = resultHTML;
            }, 1000);
        });
    }

    // Phone Verification Form
    const phoneForm = document.getElementById('phone-verify-form');
    if (phoneForm) {
        phoneForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const phone = document.getElementById('phone-input').value;
            const method = document.getElementById('phone-method').value;
            const resultDiv = document.getElementById('phone-result');
            
            setTimeout(() => {
                const isValid = validatePhone(phone);
                
                let resultHTML = '';
                if (isValid) {
                    resultHTML = `
                        <div class="result-success">
                            <h3><i class="fas fa-check-circle"></i> Phone Verified</h3>
                            <p><strong>Status:</strong> Valid phone number</p>
                            <p><strong>Number:</strong> ${phone}</p>
                            <p><strong>Method:</strong> ${method.toUpperCase()}</p>
                            <p><strong>Country:</strong> Detected</p>
                            <p><strong>Line Type:</strong> Mobile</p>
                            <p><strong>Carrier:</strong> Verified</p>
                            <p><strong>Verification Code:</strong> Sent via ${method}</p>
                        </div>
                    `;
                } else {
                    resultHTML = `
                        <div class="result-error">
                            <h3><i class="fas fa-times-circle"></i> Invalid Phone Number</h3>
                            <p>The phone number format is invalid. Please check and try again.</p>
                        </div>
                    `;
                }
                
                resultDiv.innerHTML = resultHTML;
            }, 1000);
        });
    }

    // Address Verification Form
    const addressForm = document.getElementById('address-verify-form');
    if (addressForm) {
        addressForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const street = document.getElementById('street-input').value;
            const city = document.getElementById('city-input').value;
            const state = document.getElementById('state-input').value;
            const zip = document.getElementById('zip-input').value;
            const country = document.getElementById('address-country').value;
            const resultDiv = document.getElementById('address-result');
            
            setTimeout(() => {
                const isValid = street && city && state && zip;
                
                let resultHTML = '';
                if (isValid) {
                    resultHTML = `
                        <div class="result-success">
                            <h3><i class="fas fa-check-circle"></i> Address Verified</h3>
                            <p><strong>Status:</strong> Valid address</p>
                            <p><strong>Standardized Address:</strong></p>
                            <p>${street}<br>${city}, ${state} ${zip}<br>${country}</p>
                            <p><strong>Postal Code:</strong> Valid</p>
                            <p><strong>Format:</strong> Standardized</p>
                            <p><strong>Deliverability:</strong> Confirmed</p>
                            <p><strong>Geocoding:</strong> Complete</p>
                        </div>
                    `;
                } else {
                    resultHTML = `
                        <div class="result-error">
                            <h3><i class="fas fa-times-circle"></i> Invalid Address</h3>
                            <p>Please fill in all required fields.</p>
                        </div>
                    `;
                }
                
                resultDiv.innerHTML = resultHTML;
            }, 1000);
        });
    }

    // SSN Verification Form
    const ssnForm = document.getElementById('ssn-verify-form');
    if (ssnForm) {
        // Format SSN input
        const ssnInput = document.getElementById('ssn-input');
        if (ssnInput) {
            ssnInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 3) {
                    value = value.substring(0, 3) + '-' + value.substring(3);
                }
                if (value.length > 6) {
                    value = value.substring(0, 6) + '-' + value.substring(6, 10);
                }
                e.target.value = value;
            });
        }

        ssnForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const ssn = document.getElementById('ssn-input').value;
            const firstName = document.getElementById('ssn-firstname').value;
            const lastName = document.getElementById('ssn-lastname').value;
            const dob = document.getElementById('ssn-dob').value;
            const resultDiv = document.getElementById('ssn-result');
            
            setTimeout(() => {
                const isValid = validateSSN(ssn) && firstName && lastName && dob;
                
                let resultHTML = '';
                if (isValid) {
                    resultHTML = `
                        <div class="result-success">
                            <h3><i class="fas fa-check-circle"></i> SSN Verified</h3>
                            <p><strong>Status:</strong> Valid SSN</p>
                            <p><strong>Format:</strong> Valid</p>
                            <p><strong>Identity Match:</strong> Confirmed</p>
                            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                            <p><strong>DOB:</strong> ${dob}</p>
                            <p><strong>Verification:</strong> Complete</p>
                            <p><small><i class="fas fa-lock"></i> All data is encrypted and secure</small></p>
                        </div>
                    `;
                } else {
                    resultHTML = `
                        <div class="result-error">
                            <h3><i class="fas fa-times-circle"></i> Verification Failed</h3>
                            <p>SSN format is invalid or information does not match. Please verify and try again.</p>
                        </div>
                    `;
                }
                
                resultDiv.innerHTML = resultHTML;
            }, 1500);
        });
    }

    // Fraud Detection Form
    const fraudForm = document.getElementById('fraud-demo-form');
    if (fraudForm) {
        fraudForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const amount = parseFloat(document.getElementById('txn-amount').value);
            const cardLast4 = document.getElementById('card-last4').value;
            const ipAddress = document.getElementById('ip-address').value;
            const country = document.getElementById('country').value;
            const resultDiv = document.getElementById('fraud-result');
            
            setTimeout(() => {
                // Simulate fraud detection logic
                const riskScore = calculateRiskScore(amount, cardLast4, ipAddress, country);
                const isHighRisk = riskScore > 0.7;
                const isMediumRisk = riskScore > 0.4 && riskScore <= 0.7;
                
                let resultHTML = '';
                if (isHighRisk) {
                    resultHTML = `
                        <div class="result-error">
                            <h3><i class="fas fa-exclamation-triangle"></i> High Risk Transaction</h3>
                            <p><strong>Risk Score:</strong> ${(riskScore * 100).toFixed(1)}%</p>
                            <p><strong>Status:</strong> BLOCKED</p>
                            <p><strong>Reason:</strong> Multiple risk factors detected</p>
                            <ul>
                                <li>Unusual transaction amount</li>
                                <li>Suspicious IP location</li>
                                <li>Velocity check failed</li>
                            </ul>
                            <p><strong>Recommendation:</strong> Manual review required</p>
                        </div>
                    `;
                } else if (isMediumRisk) {
                    resultHTML = `
                        <div class="result-info">
                            <h3><i class="fas fa-info-circle"></i> Medium Risk Transaction</h3>
                            <p><strong>Risk Score:</strong> ${(riskScore * 100).toFixed(1)}%</p>
                            <p><strong>Status:</strong> REVIEW</p>
                            <p><strong>Recommendation:</strong> Additional verification recommended</p>
                        </div>
                    `;
                } else {
                    resultHTML = `
                        <div class="result-success">
                            <h3><i class="fas fa-check-circle"></i> Low Risk Transaction</h3>
                            <p><strong>Risk Score:</strong> ${(riskScore * 100).toFixed(1)}%</p>
                            <p><strong>Status:</strong> APPROVED</p>
                            <p><strong>Transaction ID:</strong> TXN-${Date.now()}</p>
                            <p><strong>Amount:</strong> $${amount.toFixed(2)}</p>
                            <p><strong>Card:</strong> ****${cardLast4}</p>
                            <p><strong>Country:</strong> ${country}</p>
                        </div>
                    `;
                }
                
                resultDiv.innerHTML = resultHTML;
            }, 1000);
        });
    }

    // Payment Gateway Form
    const paymentForm = document.getElementById('payment-demo-form');
    if (paymentForm) {
        // Format card number
        const cardNumberInput = document.getElementById('card-number');
        if (cardNumberInput) {
            cardNumberInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\s/g, '');
                let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
                if (formattedValue.length > 19) formattedValue = formattedValue.substring(0, 19);
                e.target.value = formattedValue;
            });
        }

        // Format expiry date
        const expiryInput = document.getElementById('expiry');
        if (expiryInput) {
            expiryInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value;
            });
        }

        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const cardNumber = document.getElementById('card-number').value;
            const expiry = document.getElementById('expiry').value;
            const cvv = document.getElementById('cvv').value;
            const cardholder = document.getElementById('cardholder').value;
            const amount = parseFloat(document.getElementById('payment-amount').value);
            const resultDiv = document.getElementById('payment-result');
            
            setTimeout(() => {
                const isValid = validateCard(cardNumber) && expiry && cvv && cardholder && amount;
                
                let resultHTML = '';
                if (isValid) {
                    resultHTML = `
                        <div class="result-success">
                            <h3><i class="fas fa-check-circle"></i> Payment Successful</h3>
                            <p><strong>Transaction ID:</strong> PAY-${Date.now()}</p>
                            <p><strong>Amount:</strong> $${amount.toFixed(2)}</p>
                            <p><strong>Card:</strong> ****${cardNumber.slice(-4).replace(/\s/g, '')}</p>
                            <p><strong>Status:</strong> Completed</p>
                            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                            <p><strong>Authorization Code:</strong> ${Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
                        </div>
                    `;
                } else {
                    resultHTML = `
                        <div class="result-error">
                            <h3><i class="fas fa-times-circle"></i> Payment Failed</h3>
                            <p>Please check your card details and try again.</p>
                        </div>
                    `;
                }
                
                resultDiv.innerHTML = resultHTML;
            }, 1500);
        });
    }

    // Copy to clipboard functionality
    const copyButtons = document.querySelectorAll('.btn-copy');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const codeBlock = this.closest('.code-example').querySelector('code');
            const text = codeBlock.textContent;
            
            navigator.clipboard.writeText(text).then(() => {
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                }, 2000);
            });
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Validation Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function checkDisposableEmail(email) {
    const disposableDomains = ['tempmail.com', '10minutemail.com', 'guerrillamail.com', 'mailinator.com'];
    const domain = email.split('@')[1];
    return disposableDomains.some(d => domain.includes(d));
}

function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return re.test(phone.replace(/\s/g, ''));
}

function validateSSN(ssn) {
    const re = /^\d{3}-\d{2}-\d{4}$/;
    return re.test(ssn);
}

function validateCard(cardNumber) {
    const cleaned = cardNumber.replace(/\s/g, '');
    // Luhn algorithm
    let sum = 0;
    let isEven = false;
    
    for (let i = cleaned.length - 1; i >= 0; i--) {
        let digit = parseInt(cleaned[i]);
        
        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        isEven = !isEven;
    }
    
    return cleaned.length >= 13 && cleaned.length <= 19 && sum % 10 === 0;
}

function calculateRiskScore(amount, cardLast4, ipAddress, country) {
    let risk = 0;
    
    // Amount-based risk
    if (amount > 10000) risk += 0.3;
    if (amount < 10) risk += 0.2;
    
    // IP-based risk (simplified)
    if (ipAddress.startsWith('192.168.') || ipAddress.startsWith('10.')) {
        risk += 0.1; // Private IP
    }
    
    // Country-based risk (simplified)
    const highRiskCountries = ['XX', 'YY']; // Example
    if (highRiskCountries.includes(country)) {
        risk += 0.3;
    }
    
    // Card-based risk (simplified)
    if (cardLast4 === '0000' || cardLast4 === '1234') {
        risk += 0.2;
    }
    
    // Add some randomness for demo
    risk += Math.random() * 0.2;
    
    return Math.min(risk, 1.0);
}

