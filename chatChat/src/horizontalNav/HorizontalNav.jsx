import './hnav.css'
import { useState } from 'react'

import { CiSearch } from 'react-icons/ci'
import { IoPersonCircleOutline } from 'react-icons/io5'

export default function HorizontalNav() {
	const [clikedHome, setClikedHome] = useState(true)
	const [clikedNotification, setClikedNotification] = useState(false)
	const [clikedMarket, setClikedMarket] = useState(false)
	const [clikedGroups, setClikedGroups] = useState(false)
	const [clikedLive, setClikedLive] = useState(false)

	const clickHome = () => {
		setClikedHome(true)
		setClikedNotification(false)
		setClikedMarket(false)
		setClikedGroups(false)
		setClikedLive(false)
	}
	const clickNotification = () => {
		setClikedHome(false)
		setClikedNotification(true)
		setClikedMarket(false)
		setClikedGroups(false)
		setClikedLive(false)
	}
	const clickMarket = () => {
		setClikedHome(false)
		setClikedNotification(false)
		setClikedMarket(true)
		setClikedGroups(false)
		setClikedLive(false)
	}
	const clickGroups = () => {
		setClikedHome(false)
		setClikedNotification(false)
		setClikedMarket(false)
		setClikedGroups(true)
		setClikedLive(false)
	}

	const clickLive = () => {
		setClikedHome(false)
		setClikedNotification(false)
		setClikedMarket(false)
		setClikedGroups(false)
		setClikedLive(true)
	}

	return (
		<>
			<div className='hnav'>
				<div className='tabs'>
					{/* <p className={clikedHome === true ? `clik` : `n`} onclick={clickHome}>
						Дом
					</p> */}
					<p className='clik'>Дом</p>
					{/* <p
						className={clikedNotification === true ? `clik` : `n`}
						onClick={clickNotification}
					>
						{' '}
						Уведомление
					</p> */}
					<p className='clik'>Уведомление</p>
					<p
						className={clikedMarket === true ? `clik` : `n`}
						onClick={clickMarket}
					>
						Рыночная площадь
					</p>
					<p
						className={clikedGroups === true ? `clik` : `n`}
						onClick={clickGroups}
					>
						Группы
					</p>
					<p className={clikedLive === true ? `clik` : `n`} onClick={clickLive}>
						Прямой Эфир
					</p>
				</div>
				<div className='avatar'>
					<CiSearch size={30} className='search' />
					<div className='login'>
						<IoPersonCircleOutline size={30} className='logoLogin' />
						<p className='loginText'>Войти</p>
					</div>
				</div>
			</div>
		</>
	)
}
