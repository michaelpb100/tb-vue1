<template>
	<nav :style="{ background: background || '#333' }">
		<ul :style="{ background: background || '#333' }" ref="nav">
			<button class="fa fa-bars image-logo" @click="toggleNav" aria-label="Open Menu"></button>
			<li
				v-for="(link, index) in navLinks"
				:key="index"
				@mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
				@mouseleave="$event.currentTarget.style.background = background || '#333'"
			>
				<router-link
					:to="link.path"
					:style="{ color: linkColor || '#DDD' }"
				>
					{{ link.text }}
					<i :class="link.icon" />
				</router-link>
			</li>
			<p>Previous Work</p>
			<li
				v-for="(link, index) in workLinks"
				:key="index + 100"
				@mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
				@mouseleave="$event.currentTarget.style.background = background || '#333'"
			>
				<router-link
					:to="link.path"
					:style="{ color: linkColor || '#DDD' }"
				>
					{{ link.text }}
					<i :class="link.icon" />
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: ['background', 'linkColor', 'hoverBackground', 'imagePath'],
	methods: {
		toggleNav () {
			const nav = this.$refs.nav.classList
			nav.contains('active') ? nav.remove('active') : nav.add('active')
		}
	},
	data: () => ({
    navLinks: [
      {
        text: 'What we do',
		path: '/',
		icon: 'ion-ios-megaphone'
      },
      {
        text: 'Services',
		path: '/services',
		icon: 'ion-ios-business'
      },
      {
        text: 'Contact',
		path: '/contact',
		icon: 'ion-ios-bonfire'
      }
	],
	workLinks: [
      {
        text: 'Trailers',
		path: '/trailers',
		icon: 'ion-ios-megaphone'
      },
      {
        text: 'Railings and Gates',
		path: '/gates',
		icon: 'ion-ios-business'
      },
    ]
  })
}
</script>

<style scoped lang="scss">

nav {
    position: fixed;
    // top: 35px;
	// margin-top: 35px;
	// top: 10px;
	border: none;
	box-shadow: none;
    left: 0;
    width: 300px;
    height: calc(100vh - 120px);
    background: #ffffff;
	// z-index: -1;
	ul {
		display: flex;
		height: 100%;
		align-items: flex-start;
		flex-direction: column;
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;

		button {
			cursor: pointer;
			margin-top: 35px;
			margin-right: 10px;
			display: none;
			border: none;
			background: none;
			 outline:none;
		}

		a {
			text-decoration: none;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
		}

		i {
			margin-right: 10px;
			font-size: 22px;
		}

		li {
			list-style-type: none;
			padding: 10px 20px;
		}
	}
}

@media screen and (max-width: 759px) {
	nav {
		position: block;
		margin-top: 10px;
		top: 35px;
		left: 0;
		width: 0px;
		height: calc(100vh - 120px);

		ul {
			position: absolute;
			width: 300px;
			flex-direction: column;
			left: -240px;
			transition: 300ms ease all;
			top: 60px;

			&.active {
				left: 0px;
			}

			button {
				display: block;
				position: fixed;
				z-index: 1;
				top: 10px;
				left: 2px;
			}

			li {
				width: 100%;
				padding-left: 0;
				padding-right: 0;
			}

			a {
				flex-direction: row;
				margin-left: 20px;
				justify-content: space-between;
				margin-right: 13px;
			}
		}
	}
}
</style>
