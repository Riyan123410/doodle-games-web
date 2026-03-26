interface Props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
}

const ThemeToggle = ({handleChange, isChecked}: Props) => {

  return (
    <section className="toggle-container">
        
        <input 
            type="checkbox" 
            id="check" 
            className="toggle" 
            onChange={handleChange} 
            checked={isChecked}
        />
        <label htmlFor="check">Dark Mode</label>
    </section>
  );
}

export default ThemeToggle;