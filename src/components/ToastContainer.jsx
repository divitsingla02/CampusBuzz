import React from 'react';
import { CheckCircle, Info, AlertTriangle, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ToastContainer = () => {
  const { toasts, removeToast } = useApp();

  if (!toasts.length) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => {
        let Icon = CheckCircle;
        let toastClass = 'toast-success';
        let iconColor = '#10b981';

        if (toast.type === 'error') {
          Icon = AlertTriangle;
          toastClass = 'toast-error';
          iconColor = '#ef4444';
        } else if (toast.type === 'info') {
          Icon = Info;
          toastClass = 'toast-info';
          iconColor = '#6366f1';
        }

        return (
          <div key={toast.id} className={`toast ${toastClass}`}>
            <Icon size={20} color={iconColor} style={{ flexShrink: 0 }} />
            <div style={{ flex: 1, fontSize: '0.875rem', fontWeight: 600, color: '#1e293b' }}>
              {toast.message}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0.2rem'
              }}
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

