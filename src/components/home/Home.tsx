import GameButtons from './GameButtons.tsx';
import Title from './Title.tsx';

const Home = () => {

  return (
    <section className='app' /*data-theme={isDark ? "dark" : "light"}*/>
      {/* <ThemeToggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}></ThemeToggle> */}

      <div>{Title()}</div>
      <div>{GameButtons()}</div>

    </section>
  );
}

export default Home;