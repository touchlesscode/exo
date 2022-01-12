// import axios, { AxiosRequestConfig } from "axios";
import axios from "axios";
import { useEffect, useState } from "react";

const getTokenCookie = (cookie: string) => cookie.match('crm.auth.jwt');

const getJWTToken = (): string | null => {
    const cookies = window.document.cookie.split(/\s*;\s*/);
    const tokenCookie = cookies.length && cookies.filter(getTokenCookie);

    if (tokenCookie && tokenCookie.length) {
        return tokenCookie[0].split('=')[1];
    }

    return null;
};

// const getAuthFetchConfig = async (): Promise<AxiosRequestConfig> => {
//     const crmCookieSession = getJWTToken();

//     const config: AxiosRequestConfig = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     if (crmCookieSession) {
//         config.headers['Authorization'] = crmCookieSession;
//     }

//     let token: string | null = await sessionStorage.getItem('token');

//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     return config;
// };

const getAuthToken = async (): Promise<string|null> => {
    const crmCookieSession = getJWTToken();

    if (crmCookieSession) {
        return crmCookieSession;
    }

    let token: string | null = await sessionStorage.getItem('token');

    if (token) {
        return token;
    }

    return null;
};

interface AuthorizationObject {
    loading: boolean;
    authorized: boolean;
    token: string | null;
    dealerId: string | null;
    carrierId: string | null;
    userId: string | null;
}

interface TUserResponse {
    id: string;
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    phone: string;
    role: string;
    dealer_id: string;
    sales_rep_id: string;
    user_active: string;
    lastLogin: string;
    user_timezone: string;
    user_language: string;
    carrier_id: string;
    permissions: number[];
    features: number[];
    sid: string;
    webapp_domain: string;
    is_sso_enabled: number;
}

interface TMeResponse {
    user: TUserResponse;
    token: string;
}

export default function useAuthorization(): AuthorizationObject {
    const [loading, setLoading] = useState<boolean>(true);
    const [authorized, setAuthorized] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [dealerId, setDealerId] = useState<string | null>(null);
    const [carrierId, setCarrierId] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);

    const loadToken = async () => {
        const token = await getAuthToken();

        if (token) {
            try {
                const resp = await axios.get<TMeResponse>(`${process.env.REACT_APP_WEBAPP_HOST}/v2/api/auth/me`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
    
                if (resp.status === 200 && resp.data) {
                    if (process.env.NODE_ENV === 'development') {
                        sessionStorage.setItem('token', token);
                    }
                    setToken(token);
                    setDealerId(resp.data.user.dealer_id);
                    setCarrierId(resp.data.user.carrier_id);
                    setUserId(resp.data.user.id);
                    setAuthorized(true);
                    setLoading(false);
                }
            } catch (e) {
                await sessionStorage.removeItem('token');
                setAuthorized(false);
                setLoading(false);
            }
        }

        if (!token) {
            console.error('NO TOKEN FOUND');
        }
    }

    useEffect(() => {
        loadToken();
    }, []);

    return {
        loading,
        authorized,
        token,
        dealerId,
        carrierId,
        userId,
    };
}