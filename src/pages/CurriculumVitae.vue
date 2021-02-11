<template>
	<h1 class="sr-only">Ruslan sein CV</h1>

	<div class="px-4 mx-auto my-32 text-2xl space-y-96 max-w-7xl sm:px-6 lg:px-8">
		<p
			class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
		>
			Grüzi wohl! Auf der Suche nach einem Webentwickler mit Leidenschaft?
		</p>

		<p
			class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
		>
			Jemand, dem man vertrauen kann?
		</p>

		<p
			class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
		>
			Nicht nur gute Sofware schreiben möchte, sondern die Bedürfnisse des
			Kunden im Auge hat?
		</p>

		<div class="flex flex-col lg:flex-row lg:space-x-8 lg:items-center">
			<p
				class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
			>
				Die Suche hat ein Ende, so einen Entwickler hast du gerade gefunden!
			</p>
			<div class="relative max-w-lg mx-auto mt-8 sm:mt-16 lg:mt-0">
				<div
					class="absolute inset-0 transform skew-y-0 shadow-lg bg-gradient-to-r from-cyan-400 to-light-blue-500 -rotate-6 rounded-3xl"
				></div>
				<div class="relative rounded-3xl">
					<img
						class="object-cover w-full overflow-hidden h-96 lg:h-full rounded-3xl"
						src="../assets/ruslan-2021.jpg"
						alt="Bild von Ruslan Steiger"
					/>
				</div>
			</div>
		</div>

		<div>
			<p
				class="max-w-3xl mx-auto mb-6 space-y-6 text-lg font-medium sm:text-2xl sm:leading-10"
			>
				Mein Name ist <span class="font-bold">Ruslan Steiger</span> und ich bin
				ein leidenschaftlicher Entwickler. Anfang 2018 bin ich nach Pratteln
				gezogen und geniesse seitdem die schöne Aussicht hier.
			</p>

			<div class="relative max-w-3xl mx-auto mt-8 sm:mt-16 lg:mt-0">
				<div
					class="absolute inset-0 transform skew-y-0 shadow-lg bg-gradient-to-r from-cyan-400 to-light-blue-500 -rotate-6 rounded-3xl"
				></div>
				<div class="relative rounded-3xl">
					<img
						class="rounded-3xl"
						src="../assets/pratteln-2020.jpg"
						alt="Ruslan und Cedric auf dem Sulzchopf in Muttenz"
					/>
				</div>
			</div>
		</div>

		<div>
			<p
				class="max-w-3xl mx-auto mb-6 space-y-6 text-lg font-medium sm:text-2xl sm:leading-10"
			>
				Das Projekt worauf ich sehr stolz bin ist unsere online Plattform
				<a
					class="underline"
					rel="noopener"
					target="_blank"
					href="https://eldar.ch"
					v-text="`Eldar Store`"
				/>. Dies ist eine moderner Shop um die hohen Ansprüche unserer Kunden zu
				erfüllen. Man kann mehr als 7 Millionen Titel finden in unserer
				Datenbank. Die Suche läuft in Echtzeit ab und wird über die
				hervorrangende Volltext-Suche von Postgres gehandhabt!
			</p>

			<div class="relative max-w-lg mx-auto mt-8 sm:mt-16 lg:mt-0">
				<div
					class="absolute inset-0 transform skew-y-0 shadow-lg bg-gradient-to-r from-cyan-400 to-light-blue-500 -rotate-6 rounded-3xl"
				></div>
				<div class="relative p-20 bg-white ring-1 rounded-3xl">
					<p class="text-lg font-medium text-center">Verwendete Technologien</p>

					<ul class="mt-8 space-y-4">
						<li class="flex items-center">
							<img
								class="w-8"
								src="../assets/logo-laravel.png"
								alt="Laravel Logo"
							/>
							<span class="ml-2">Laravel</span>
						</li>
						<li class="flex items-center">
							<img class="w-8" src="../assets/logo-nuxt.png" alt="Nuxt Logo" />
							<span class="ml-2">Nuxt</span>
						</li>
						<li class="flex items-center">
							<img
								class="w-8"
								src="../assets/logo-apollo.png"
								alt="Apollo Logo"
							/>
							<span class="ml-2">Apollo</span>
						</li>
						<li class="flex items-center">
							<img
								class="w-8"
								src="../assets/logo-tailwind.png"
								alt="TailwindCSS Logo"
							/>
							<span class="ml-2">TailwindCSS</span>
						</li>
						<li class="flex items-center">
							<img
								class="w-8"
								src="../assets/logo-postgres.png"
								alt="Postgres Logo"
							/>
							<span class="ml-2">Postgres</span>
						</li>
						<li class="flex items-center">
							<img
								class="w-8"
								src="../assets/logo-vercel.png"
								alt="Vercel Logo"
							/>
							<span class="ml-2">Vercel (Frontend Hosting)</span>
						</li>
						<li class="flex items-center">
							<img class="w-8" src="../assets/logo-aws.png" alt="AWS Logo" />
							<span class="ml-2">AWS (Backend Hosting)</span>
						</li>
						<li class="text-base">
							Und unzählige Open-Source Libraries. Ein grosses Dank an alle
							Maintainer!
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div>
			<p
				class="max-w-3xl mx-auto mb-6 space-y-6 text-lg font-medium sm:text-2xl sm:leading-10"
			>
				Ich habe eine grosse Leidenschaft für PHP und insbesonders Laravel. Ich
				teile meine Begeisterung mit anderen gerne. Aus dem Grund habe ich das
				<a
					class="underline"
					rel="noopener"
					target="_blank"
					href="https://www.meetup.com/laravel-basel/"
					v-text="`Laravel Basel`"
				/>-Meetup gestartet. Die erste Veranstaltung war ein riesen Erfolg für
				mich und ich hab viele neue Gesichter kennen gelernt. Sobald es wieder
				möglich ist, werden weitere Veranstaltungen kommen ;)
			</p>

			<div class="relative max-w-3xl mx-auto mt-8 sm:mt-16 lg:mt-0">
				<div
					class="absolute inset-0 transform skew-y-0 shadow-lg bg-gradient-to-r from-cyan-400 to-light-blue-500 -rotate-6 rounded-3xl"
				></div>
				<div class="relative rounded-3xl">
					<img
						class="rounded-3xl"
						src="../assets/laravel-basel-2020.jpg"
						alt="Laravel Basel beim ersten Meetup"
					/>
				</div>
			</div>
		</div>

		<div>
			<p
				class="max-w-3xl mx-auto mb-6 space-y-6 text-lg font-medium sm:text-2xl sm:leading-10"
			>
				Ich bin ein grosser Verfechter vom Wissensaustausch. Hat man etwas
				gelernt oder was neues gefunden was einem die Arbeit erleichtert, sollte
				man dies mit seinen Kollegen teilen. Aus dem Grund habe ich Anfang 2020
				ein Herzensprojekt von mir vorgestellt.
			</p>
			<p
				class="max-w-3xl mx-auto mb-6 space-y-6 text-lg font-medium sm:text-2xl sm:leading-10"
			>
				Ich hab einen Talk über TalwindCSS gegeben beim
				<a
					class="underline"
					rel="noopener"
					target="_blank"
					href="https://www.meetup.com/Vue-Basel/"
					v-text="`Vue Basel`"
				/>-Meetup. Was in meinen Augen alles verändert hat in der
				Frontendentwicklung. Zu dem Zeitpunkt war Tailwind nicht so stark
				verbreitet wie heute und v1 wurde gerade released. Es war eine schöne
				Erfahrung und ich hab sehr viel positives Feedback erhalten. Einige
				haben sogar Tailwind in ihrer Workflow danach aufgenommen. Was mich sehr
				freut :)
			</p>

			<div class="relative max-w-3xl mx-auto mt-8 sm:mt-16 lg:mt-0">
				<div
					class="absolute inset-0 transform skew-y-0 shadow-lg bg-gradient-to-r from-cyan-400 to-light-blue-500 -rotate-6 rounded-3xl"
				></div>
				<div class="relative rounded-3xl">
					<img
						class="rounded-3xl"
						src="../assets/tailwind-talk-2020.jpg"
						alt="Ruslan hält eine Präsentation über TailwindCSS"
					/>
				</div>
			</div>
		</div>

		<div class="max-w-3xl mx-auto sm:flex">
			<div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
				<video class="w-96" controls muted>
					<source src="../assets/hobby-2020.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div>
				<p class="mt-1">
					Der römische Dichter Juvenal hat vor 2000 Jahren schon folgendes
					gesagt: "In einem gesunden Körper wohnt doch ein gesunder Geist." Aus
					dem Grund versuche ich so gut es in meiner Freizeit Sport zu treiben.
					Durch meinen Trainer bin ich auf "Krabi Krabong" gestossen. Es ist
					eine traditionelle Kampfkunst mit Waffen aus Thailand. Im Training
					verwenden wir Rattan-Stöcke um uns nicht zu verletzen.
				</p>
			</div>
		</div>

		<div class="bg-white">
			<div
				class="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:py-16 lg:px-8"
			>
				<h2
					class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
				>
					<span class="block">Na schon aufgeregt mich zu treffen?</span>
					<span class="block">Nicht schüchtern sein und einfach melden.</span>
				</h2>
				<div class="flex justify-center mt-8">
					<div class="inline-flex rounded-md shadow">
						<a
							href="#"
							class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
						>
							Telefon
						</a>
					</div>
					<div class="inline-flex ml-3">
						<a
							href="#"
							class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200"
						>
							eMail
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="overflow-hidden bg-white rounded-lg shadow">
			<div class="px-4 py-5 sm:p-6">
				Na schon aufgeregt mich zu treffen? Nicht schüchtern sein und einfach
				melden :)
			</div>
		</div>

		<div class="overflow-hidden bg-white rounded-lg shadow">
			<div class="px-4 py-5 sm:p-6">
				Die Seite wurde Stolz mit folgenden Technolgien erstellt:
				<ul>
					<li>Vite</li>
					<li>Vue</li>
					<li>TailwindCSS</li>
					<li>Netlify</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup></script>
