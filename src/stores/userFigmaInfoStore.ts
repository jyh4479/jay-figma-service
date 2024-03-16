import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

interface UserFigmaInfo {
    clientId: string
    scope: string
    setClientId: (clientId: string) => void
    setScope: (scope: string) => void
}

const userFigmaInfoStore = create(
    persist<UserFigmaInfo>(
        (set) => ({
            clientId: "",
            scope: "files:read",
            setClientId: (clientId: string) => set({clientId: clientId}),
            setScope: (scope: string) => set({scope: scope})
        }),
        {
            name: "userFigmaInfo",
            storage: createJSONStorage(() => sessionStorage),
        },
    )
);

export default userFigmaInfoStore;