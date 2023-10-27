import { UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <>
      <header>
        <UserButton afterSignOutUrl="/" />
      </header>
      <main>
        <h3 className="h3-bold">Welcome to CodeQuery</h3>
      </main>
    </>
  )
}

export default Home
