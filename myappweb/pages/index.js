// domain.com/

import { Fragment } from "react";
import Link from "next/link";

function HomePage() {
    return (
        <Fragment>
            <h1>The Home page</h1>
            <Link href='/quizzes'> Quizzes </Link>
        </Fragment>
    );

}

export default HomePage;