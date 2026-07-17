PUT YOUR HERO VIDEO HERE
=========================

File expected: hero-showcase.mp4
Full path:     public/videos/hero-showcase.mp4

STATUS: hero-showcase.mp4 is already in this folder (compressed from your
uploaded 4K clip down to 1080p, ~8.5MB, web-optimized with faststart).
hero-poster.jpg is a frame grabbed from the video, used as the fallback/
poster image so the hero looks right even before the video loads.

The first hero slide (HeroSlider.tsx) auto-plays this file as a full-bleed
looping background video, muted by default, with a mute/unmute button in
the bottom control bar.

WHERE TO GET A FREE VIDEO
--------------------------
- Pexels Videos   -> https://www.pexels.com/videos/  (search "luxury home", "aerial drone house")
- Mixkit          -> https://mixkit.co/free-stock-video/
- Coverr          -> https://coverr.co/

RECOMMENDATIONS
----------------
- Format: .mp4 (H.264)
- Length: 10-20 seconds, looped (pick a clip with a smooth start/end so the loop isn't jarring)
- Resolution: 1920x1080 is enough (4K just adds load time, hero video is heavily overlaid anyway)
- Compress it! Use https://www.freeconvert.com/video-compressor or HandBrake to keep the
  file under ~8-10MB so the hero section loads fast, especially on mobile.
- Orientation: landscape / widescreen, since it fills the whole hero section.

HOW TO ADD MORE VIDEO SLIDES
------------------------------
Open src/components/HeroSlider.tsx and add a "video" field to any slide object
in HERO_SLIDES, e.g.:

  {
    image: 'your-fallback-photo.jpg',
    video: '/videos/newport-showcase.mp4',
    title: 'The Newport Coast Pavilion',
    ...
  }

Any slide WITHOUT a "video" field keeps using the normal Ken Burns image
crossfade — you don't need a video for every slide.
