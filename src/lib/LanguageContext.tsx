import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

const STORAGE_KEY = "ncb_preferred_lang";

export const LANGUAGES = [
    { code: "en", label: "English",    native: "English"    },
    { code: "hi", label: "Hindi",      native: "हिंदी"       },
    { code: "bn", label: "Bengali",    native: "বাংলা"       },
    { code: "te", label: "Telugu",     native: "తెలుగు"      },
    { code: "mr", label: "Marathi",    native: "मराठी"       },
    { code: "ta", label: "Tamil",      native: "தமிழ்"       },
    { code: "gu", label: "Gujarati",   native: "ગુજરાતી"     },
    { code: "pa", label: "Punjabi",    native: "ਪੰਜਾਬੀ"      },
    { code: "kn", label: "Kannada",    native: "ಕನ್ನಡ"       },
    { code: "ml", label: "Malayalam",  native: "മലയാളം"      },
    { code: "or", label: "Odia",       native: "ଓଡ଼ିଆ"       },
    { code: "as", label: "Assamese",   native: "অসমীয়া"     },
];

interface LanguageContextType {
    selectedLang: string | null;
    selectLanguage: (code: string) => void;
    resetLanguage: () => void;
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
    LANGUAGES: typeof LANGUAGES;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [selectedLang, setSelectedLang] = useState<string | null>(
        () => localStorage.getItem(STORAGE_KEY)
    );
    const [showModal, setShowModal] = useState(!localStorage.getItem(STORAGE_KEY));

    const selectLanguage = useCallback((code: string) => {
        localStorage.setItem(STORAGE_KEY, code);
        setSelectedLang(code);
        setShowModal(false);
    }, []);

    const resetLanguage = useCallback(() => {
        localStorage.removeItem(STORAGE_KEY);
        setSelectedLang(null);
    }, []);

    const openModal  = useCallback(() => setShowModal(true),  []);
    const closeModal = useCallback(() => setShowModal(false), []);

    return (
        <LanguageContext.Provider value={{ selectedLang, selectLanguage, resetLanguage, showModal, openModal, closeModal, LANGUAGES }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within LanguageProvider");
    return context;
};
