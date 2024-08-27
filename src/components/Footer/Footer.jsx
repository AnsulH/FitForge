import React from 'react'
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className="bg-gray-300 border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024
                        <a href="/" className="hover:underline">
                            Polo
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm: justify-center sm:mt-0">
                        <Link to="https://www.linkedin.com/in/ansul-halami-19475b197/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-500" target="_blank" rel="noopener noreferrer">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.5 0h-13A3.5 3.5 0 0 0 0 3.5v13A3.5 3.5 0 0 0 3.5 20h13a3.5 3.5 0 0 0 3.5-3.5v-13A3.5 3.5 0 0 0 16.5 0ZM6.62 16.5H3.62V7.48h3v9.02ZM5.12 6.28A1.62 1.62 0 1 1 5.12 3a1.62 1.62 0 0 1 0 3.28Zm11.38 10.22h-3v-4.5c0-1.08-.02-2.48-1.5-2.48-1.5 0-1.73 1.17-1.73 2.38v4.6H8.23V7.48h2.88v1.24h.04c.4-.76 1.37-1.55 2.83-1.55 3.03 0 3.6 2 3.6 4.58v5.75Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">LinkedIn account</span>
                        </Link>
                        <Link to="https://github.com/AnsulH" className="text-gray-500" target="_blank" rel="noopener noreferrer">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="https://www.instagram.com/ansul_halami?igsh=MThqajY1eHYyeTBlcg==" className="text-gray-500" target="_blank" rel="noopener noreferrer">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 1.333c-2.616 0-2.95.01-3.982.057-1.02.046-1.719.21-2.329.446a4.48 4.48 0 0 0-1.628 1.063 4.482 4.482 0 0 0-1.063 1.628c-.236.61-.4 1.309-.446 2.329C1.343 7.88 1.333 8.214 1.333 10s.01 2.12.057 3.152c.046 1.02.21 1.719.446 2.329.242.622.585 1.138 1.063 1.628.49.49 1.006.821 1.628 1.063.61.236 1.309.4 2.329.446 1.032.047 1.366.057 3.982.057s2.95-.01 3.982-.057c1.02-.046 1.719-.21 2.329-.446.622-.242 1.138-.585 1.628-1.063.49-.49.821-1.006 1.063-1.628.236-.61.4-1.309.446-2.329.047-1.032.057-1.366.057-3.982s-.01-2.95-.057-3.982c-.046-1.02-.21-1.719-.446-2.329a4.481 4.481 0 0 0-1.063-1.628 4.481 4.481 0 0 0-1.628-1.063c-.61-.236-1.309-.4-2.329-.446-1.032-.047-1.366-.057-3.982-.057zM10 0c2.662 0 3.003.012 4.056.059 1.056.047 1.781.217 2.432.465a5.673 5.673 0 0 1 2.036 1.27 5.674 5.674 0 0 1 1.27 2.036c.248.651.418 1.376.465 2.432.047 1.053.059 1.394.059 4.056s-.012 3.003-.059 4.056c-.047 1.056-.217 1.781-.465 2.432a5.673 5.673 0 0 1-1.27 2.036 5.673 5.673 0 0 1-2.036 1.27c-.651.248-1.376.418-2.432.465-1.053.047-1.394.059-4.056.059s-3.003-.012-4.056-.059c-1.056-.047-1.781-.217-2.432-.465a5.673 5.673 0 0 1-2.036-1.27 5.673 5.673 0 0 1-1.27-2.036c-.248-.651-.418-1.376-.465-2.432C.012 13.003 0 12.662 0 10s.012-3.003.059-4.056c.047-1.056.217-1.781.465-2.432A5.673 5.673 0 0 1 1.794 1.27a5.673 5.673 0 0 1 2.036-1.27c.651-.248 1.376-.418 2.432-.465C6.997.012 7.338 0 10 0zm0 4.833a5.167 5.167 0 1 0 0 10.333A5.167 5.167 0 0 0 10 4.833zM10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.333-7.667a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Instagram account</span>
                        </Link>

                        <Link to="https://x.com/Polo131171" className="text-gray-500" target="_blank" rel="noopener noreferrer">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
