import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

interface UserFigmaInfo {
    clientId: string
    scope: string
    clientSecret: string
    callbackUri: string

    setClientId: (clientId: string) => void
    setClientSecret: (clientSecret: string) => void
    setScope: (scope: string) => void
    setCallbackUri: (callbackUri: string) => void
}

const userFigmaInfoStore = create(
    persist<UserFigmaInfo>(
        (set) => ({
            clientId: "",
            clientSecret: "",
            scope: "files:read",
            callbackUri: "",
            setClientId: (clientId: string) => set({clientId: clientId}),
            setClientSecret: (clientSecret: string) => set({clientSecret: clientSecret}),
            setScope: (scope: string) => set({scope: scope}),
            setCallbackUri: (callbackUri: string) => set({callbackUri: callbackUri})
        }),
        {
            name: "userFigmaInfo",
            storage: createJSONStorage(() => sessionStorage),
        },
    )
);

export default userFigmaInfoStore;