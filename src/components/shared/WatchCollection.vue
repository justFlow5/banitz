<template>
    <div class="collection-wrapper">
        <ul class="watch-collection" :class="{ darkTheme: theme }" ref="slider">
            <slot></slot>
        </ul>
        <button
            class="left"
            :class="{ nobutton: !theme }"
            @click="easyScroll(getLeftSettings)"
        >
            <Next />
        </button>
        <button
            class="right"
            :class="{ nobutton: !theme }"
            @click="easyScroll(settings)"
        >
            <Next />
        </button>
    </div>
</template>

<script>
import easyScroll from 'easy-scroll';
import Next from '../../assets/icons/Next';

export default {
    name: 'Watch-Collection',
    props: ['theme'],
    data() {
        return {
            easyScroll,
            settings: {
                scrollableDomEle: '',
                direction: 'right',
                duration: 300,
                easingPreset: 'easeInQuad',
                scrollAmount: 500,
            },
        };
    },

    computed: {
        getLeftSettings() {
            return { ...this.settings, direction: 'left' };
        },
    },

    mounted() {
        this.settings.scrollableDomEle = this.$refs.slider;
    },

    components: {
        Next,
    },
};
</script>

<style lang="scss" scoped>
.button-wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}

.collection-wrapper {
    position: relative;
    height: 100%;
    width: 100%;

    &:hover .left,
    &:hover .right {
        transform: translate(0, -50px);
        opacity: 1;
    }

    & .left,
    & .right {
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        opacity: 0;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        cursor: pointer;
        background-color: rgb(255, 255, 255);
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;
        transition: all 0.3s;

        &.nobutton {
            display: none !important;
        }

        @media (min-width: $laptop) {
            display: inline-block;
        }

        & > svg {
            width: 30%;
            height: 30%;
            fill: rgb(33, 33, 33);
            transition: all 0.3s;
        }

        &:hover {
            background-color: #e6aa13;

            & > svg {
                fill: rgb(255, 255, 255);
            }
        }
    }

    & .left {
        left: 20px;
        transform: translate(-100%, -50px);
        & > svg {
            transform: rotate(180deg);
        }
    }

    & .right {
        right: 20px;
        transform: translate(100%, -50px);
    }
}
.watch-collection {
    position: relative;
    overflow: scroll hidden;
    display: flex;
    position: relative;

    & li {
        list-style-type: none;
        height: 95%;
        position: relative;
    }
}
</style>
