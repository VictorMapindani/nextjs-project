import '@/assets/styles/globals.css';

import HomePage from "./page";

const MainLayout = ({children}) => {
    return (<html>
        <body>
            <main>
            {children}
            </main>
        </body>
    </html>);
}
 
export default MainLayout;