import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react'
import Router from 'next/router'
// import Header from '../components/Header'
import Link from 'next/link'
import Layout from '../components/Layout'
const SignUp = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const submitData = async e => {
		e.preventDefault()
		try {
			const body = { name, email }
			await fetch(`http://localhost:3000/api/user`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			})
			localStorage.setItem('user', name)
			localStorage.setItem('email', email)
			await Router.push('/drafts')
		} catch (error) {
			console.error(error)
		}
	}



	return (
		<Layout>
			<div className="page" style={{ marginTop: 200 }}>
				<form
					onSubmit={submitData}>
					<h1>Sign Up</h1>
					<input
						autoFocus
						onChange={e => setName(e.target.value)}
						placeholder="Name"
						type="text"
						value={name}
					/>
					<input
						onChange={e => setEmail(e.target.value)}
						placeholder="Email address"
						type="text"
						value={email}
					/>
					<input
						disabled={!name || !email}
						type="submit"
						value="Signup"
					/>
					<Link href="/">
						Cancel
					</Link>
				</form>
			</div>
			<style jsx>{`
      .page {
        background: white;
				padding: 3rem;
        display: flex;
        justify-content: center;
      }

      input[type='text'] {
        width: 100%;
				height: 2.5rem;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
        border: 0.125rem solid rgba(0, 0, 0, 0.2);
      }

      input[type='submit'] {
				font-weight: bold;
        background: #ececec;
        border: 0;
        padding: 1rem 2rem;
				border-radius: .5rem;
      }

      .back {
        margin-left: 1rem;
      }
    `}</style>
		</Layout>

	)
}

export default SignUp
