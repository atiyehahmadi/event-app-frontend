import Link from "next/link"
export default function Header() {
    return (
        <header className="bg-transparent sticky-bar mt-4">
            <div className="container bg-transparent">
                <div className="bg-transparent flex justify-between items-center py-3">
                    <div className="text-3xl font-semibold leading-none">
                        <img className="h-10" src="/imgs/logos/logo-wide.svg" />
                    </div>

                    <ul className="lg:flex lg:items-center lg:w-auto lg:space-x-12">
                        <li className="group relative pt-4 pb-4 has-child">
                            <Link href="/">
                                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className="pt-4 pb-4">
                            <Link href="/events">
                                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                    Events
                                </a>
                            </Link>
                        </li>
                        <li className="pt-4 pb-4">
                            <Link href="/contact">
                                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <div className="hidden lg:block">
                            <Link href="/login">
                                <a className="btn-accent hover-up-2">Log In</a>
                            </Link>
                            <Link href="/signup">
                                <a className="btn-primary hover-up-2">
                                    Sign Up
                                </a>
                            </Link>
                        </div>
                </div>

            </div>

        </header>
    )
}
