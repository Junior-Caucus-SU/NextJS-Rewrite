
import Nav from "@/components/Nav"
import { Suspense, lazy } from "react";
import styles from "@/styles/Resources.module.css"

const ResourceList = lazy(() => import("@/components/ResourceList"));

export default async function Resources() {

    return (<div>
        <Nav page="Resources" />
        <div className={styles["resources-super"]}>
                <ResourceList />
         </div>
    </div>);
}

