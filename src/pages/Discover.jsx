import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/Services/ShazamCore';

function Discover() {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genresTitle = 'pop';
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  if (isFetching) return <Loader title="loading songs..." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-white text-3xl text-left">Track Down {genresTitle}</h2>
        <select className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5" onClick={() => {}} value="">
          {genres.map((genre) => <option key={genre.value} value={genre.value}> {genre.title} </option>)}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, index) => (<SongCard key={song.key} song={song} i={index} isPlaying={isPlaying} activeSong={activeSong} data={data} />))}
      </div>
    </div>
  );
}

export default Discover;
