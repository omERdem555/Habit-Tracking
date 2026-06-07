/**
 * Translates Firebase Auth error codes to user-friendly messages in Turkish and English
 */
export const getFirebaseErrorMessage = (
  error: any,
  language: 'en' | 'tr' = 'en'
): string => {
  // Extract error code from Firebase error
  let errorCode = error?.code || '';
  let errorMessage = error?.message || '';

  // Firebase error format: "Firebase: Error message (auth/error-code)."
  if (!errorCode) {
    const codeMatch = errorMessage.match(/\(auth\/([^)]+)\)/);
    if (codeMatch) {
      errorCode = codeMatch[1];
    }
  }

  const translations: Record<string, { en: string; tr: string }> = {
    'weak-password': {
      en: 'Password should be at least 6 characters.',
      tr: 'Şifre en az 6 karakter olmalıdır.',
    },
    'invalid-email': {
      en: 'The email address is invalid.',
      tr: 'E-posta adresi geçersiz.',
    },
    'user-not-found': {
      en: 'No account found with this email.',
      tr: 'Bu e-posta ile kayıtlı hesap bulunamadı.',
    },
    'wrong-password': {
      en: 'The password is incorrect.',
      tr: 'Şifre yanlış.',
    },
    'email-already-in-use': {
      en: 'An account with this email already exists.',
      tr: 'Bu e-posta ile zaten bir hesap kayıtlı.',
    },
    'too-many-requests': {
      en: 'Too many failed login attempts. Please try again later.',
      tr: 'Çok fazla başarısız giriş denemesi. Lütfen daha sonra tekrar deneyin.',
    },
    'operation-not-allowed': {
      en: 'This operation is not allowed.',
      tr: 'Bu işleme izin verilmiyor.',
    },
    'invalid-credential': {
      en: 'The email or password is incorrect.',
      tr: 'E-posta veya şifre yanlış.',
    },
    'user-disabled': {
      en: 'This account has been disabled.',
      tr: 'Bu hesap devre dışı bırakılmıştır.',
    },
    'network-request-failed': {
      en: 'A network error occurred. Please check your connection.',
      tr: 'Ağ hatası oluştu. Lütfen bağlantınızı kontrol edin.',
    },
    'unauthorized-domain': {
      en: 'This domain is not authorized for Google sign-in. Add localhost or your current domain in Firebase Authentication settings.',
      tr: 'Bu alan adı Google ile giriş için yetkili değil. Firebase Authentication ayarlarından localhost veya mevcut domaini ekleyin.',
    },
    'popup-blocked': {
      en: 'The popup was blocked by your browser. Please allow popups and try again.',
      tr: 'Açılır pencere tarayıcınız tarafından engellendi. Lütfen açılır pencerelere izin verip tekrar deneyin.',
    },
    'popup-closed-by-user': {
      en: 'The popup was closed before completing sign-in. Please try again.',
      tr: 'Giriş tamamlanmadan önce pencere kapatıldı. Lütfen tekrar deneyin.',
    },
  };

  if (errorCode && translations[errorCode]) {
    return translations[errorCode][language];
  }

  // Fallback to generic messages if error code not found
  if (language === 'tr') {
    return errorMessage.includes('register')
      ? 'Kayıt başarısız. Lütfen tekrar deneyin.'
      : errorMessage.includes('sign in') || errorMessage.includes('login')
        ? 'Giriş başarısız. Lütfen tekrar deneyin.'
        : 'Bir hata oluştu. Lütfen tekrar deneyin.';
  }

  return errorMessage || 'An error occurred. Please try again.';
};
