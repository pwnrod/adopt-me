import { useState } from 'react';
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];
const BREEDS = [];

const SearchParams = () => {
    const [location, setLocation] = useState('');
    const [animal, setAnimal] = useState('');
    const [breed, setBreed] = useState('');

    return (
        <div className='search-params'>
            <form>
                <label htmlFor='location'>
                    Location
                    <input
                        id='location'
                        value={location}
                        onChange={(e) => {
                            setLocation(e.target.value);
                        }}
                        placeholder='Location'
                    />
                </label>
                <label htmlFor='animal'>
                    Animal
                    <select
                        id='animal'
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed('');
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor='breed'>
                    Breed
                    <select
                        id='breed'
                        disabled={BREEDS.length === 0}
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    >
                        <option />
                        {BREEDS.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
