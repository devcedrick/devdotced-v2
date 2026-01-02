import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({ name, email, subject, message }: EmailTemplateProps) {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#F9FAFB',
      padding: '40px 20px',
      color: '#111827',
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #E5E7EB'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
          padding: '32px 40px',
          borderBottom: '3px solid #1D4ED8'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign: 'center'
          }}>
            📬 New Contact Form Submission
          </h1>
          <p style={{
            margin: '8px 0 0',
            fontSize: '14px',
            color: '#DBEAFE',
            textAlign: 'center'
          }}>
            DevDotCed Portfolio
          </p>
        </div>

        {/* Content */}
        <div style={{
          padding: '40px',
        }}>
          <p style={{
            margin: '0 0 24px',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#4B5563'
          }}>
            You have received a new message from your portfolio contact form.
          </p>

          {/* Sender Information */}
          <div style={{
            backgroundColor: '#F3F4F6',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '24px',
            border: '1px solid #E5E7EB'
          }}>
            <h3 style={{
              margin: '0 0 16px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Sender Details
            </h3>
            
            <div style={{
              marginBottom: '12px'
            }}>
              <span style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: '600',
                color: '#6B7280',
                minWidth: '80px'
              }}>
                Name:
              </span>
              <span style={{
                fontSize: '15px',
                color: '#111827',
                fontWeight: '500'
              }}>
                {name}
              </span>
            </div>

            <div style={{
              marginBottom: '12px'
            }}>
              <span style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: '600',
                color: '#6B7280',
                minWidth: '80px'
              }}>
                Email:
              </span>
              <a href={`mailto:${email}`} style={{
                fontSize: '15px',
                color: '#3B82F6',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                {email}
              </a>
            </div>

            <div>
              <span style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: '600',
                color: '#6B7280',
                minWidth: '80px'
              }}>
                Subject:
              </span>
              <span style={{
                fontSize: '15px',
                color: '#111827',
                fontWeight: '500'
              }}>
                {subject || 'No subject provided'}
              </span>
            </div>
          </div>

          {/* Message Content */}
          <div style={{
            marginBottom: '24px'
          }}>
            <h3 style={{
              margin: '0 0 12px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Message
            </h3>
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              padding: '20px',
              fontSize: '15px',
              lineHeight: '24px',
              color: '#374151',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}>
              {message}
            </div>
          </div>

          {/* Quick Action Button */}
          <div style={{
            marginTop: '32px',
            textAlign: 'center',
            paddingTop: '24px',
            borderTop: '1px solid #E5E7EB'
          }}>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(`Re: ${subject || 'Your message'}`)}&body=${encodeURIComponent(`Hi ${name},\n\nThank you for reaching out!\n\n`)}`} target="_blank" style={{
              display: 'inline-block',
              backgroundColor: '#3B82F6',
              color: '#ffffff',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '15px',
              boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
            }}>
              📧 Reply from Gmail
            </a>
          </div>

          <p style={{
            margin: '20px 0 0',
            fontSize: '13px',
            lineHeight: '20px',
            color: '#9CA3AF',
            textAlign: 'center'
          }}>
            Opens Gmail compose window from kencedrickjimeno@gmail.com with pre-filled details
          </p>
        </div>

        {/* Footer */}
        <div style={{
          backgroundColor: '#F9FAFB',
          padding: '24px 40px',
          textAlign: 'center',
          borderTop: '1px solid #E5E7EB'
        }}>
          <p style={{
            margin: 0,
            fontSize: '13px',
            color: '#6B7280'
          }}>
            This email was sent from your DevDotCed portfolio contact form
          </p>
          <p style={{
            margin: '8px 0 0',
            fontSize: '12px',
            color: '#9CA3AF'
          }}>
            Received on {new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}
          </p>
        </div>
      </div>
    </div>
  );
}