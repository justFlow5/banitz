<template>
    <div class="wrapper">
        <div class="image-gallery-wrapper">
            <div
                class="video-container"
                :class="{
                    isTyped: currentView === 'classic' || 'professional',
                }"
            >
                <VideoBG :category="currentView" />
                <Overlay
                    :isHome="false"
                    :title="currentView"
                    :subtitle="getSubtitle"
                />
            </div>
            <div class="gallery-container">
                <Header />
                <WatchCategoryImageGallery :category="currentView" />
            </div>
        </div>
    </div>
</template>

<script>
import VideoBG from '../components/WatchCategoryGallery/VideoBG';
import Overlay from '../components/shared/Overlay';
import Header from '../components/WatchCategoryGallery/Header';
import WatchCategoryImageGallery from '../components/WatchCategoryGallery/WatchCategoryImageGallery';
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'WatchCategoryGallery',
    components: {
        VideoBG,
        Overlay,
        Header,
        WatchCategoryImageGallery,
    },

    mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    computed: {
        ...mapState({
            currentView: (state) => state.appStore.currentView,
        }),

        ...mapGetters({
            getWatchesByCategory: 'productsStore/getWatchesByCategory',
        }),

        getSubtitle() {
            if (
                this.currentView === 'professional' ||
                this.currentView === 'classic'
            )
                return `The Collection`;
            else return '';
        },
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    overflow-x: hidden;
}
.image-gallery-wrapper {
    background-color: rgb(247, 247, 247);
    min-height: 100%;
    width: 100vw;
    overflow-x: hidden !important;
}

.video-container {
    width: 100vw;
    height: 55vh;
    position: relative;
    overflow-x: hidden;

    &.isTyped {
        height: 75vh;
    }
}

.gallery-container {
    width: 80%;
    margin: 0 auto;
    padding: 30px 0;
    overflow-x: hidden;

    @media (min-width: $laptop) {
        padding: 60px 0;
    }
}
</style>
