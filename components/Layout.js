import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header/>
            <div className='container'>{children}</div>
            <Footer />
        </div>
    )
}

Layout.defaultProps={
    title: 'Online Events | find the best meetings',
    description: 'a place for finding meetings',
    keywords: 'education , music , meetup '
}
