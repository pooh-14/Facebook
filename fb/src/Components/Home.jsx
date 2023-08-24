import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS Files/Home.css";

const Home = () => {
  const [createPost, setCreatePost] = useState(false);
  const router = useNavigate();

  function openCreate() {
    setCreatePost(true);
  }

  function closeCreate() {
    setCreatePost(false);
  }

  return (
    <div id="screen">
      <div id="first">
        <div>
          <img src="https://scontent.fbom2-2.fna.fbcdn.net/v/t39.30808-1/271625882_108868848347455_4875065016885278752_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=104&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=qc1LsOAe6LIAX870qnn&_nc_ht=scontent.fbom2-2.fna&oh=00_AfAMBQdjRdryKbXSFqKr-DBxDk79RspiVWiWSfJpntSq2w&oe=64E29FB8" />
          <p>Poohh Art</p>
        </div>
        <div>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/-UR-mdYpyXa.png" />
          <p onClick={()=>router('/addfriend')}>Find friends</p>
        </div>
        <div>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png" />
          <p>Memories</p>
        </div>
        <div>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/X1wwBNSCk5F.png" />
          <p>Saved</p>
        </div>
        <div>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/NCc4ln3EAaS.png" />
          <p>Groups</p>
        </div>
        <div>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/8L2T81pQAIa.png" />
          <p>Video</p>
        </div>
        <div>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/rEk7fp0z5AA.png" />
          <p>Marketplace</p>
        </div>
        <div>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png" />
          <p>Feeds</p>
        </div>
        <div>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png" />
          <p>Events</p>
        </div>
        <div>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/tx2VFwUKc-K.png" />
          <p>Adds Manager</p>
        </div>
        <div>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/eChFgZ345zp.png" />
          <p>Crisis response</p>
        </div>
        <div>
          <i class="fa-solid fa-angle-down"></i>
          <p>See more</p>
        </div>

        <p>
          Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta ©
          2023
        </p>
      </div>

      <div id="second">
        <div id="between">
          <div id="story">
            <i onClick={()=>router('/createstory')} class="fa-solid fa-plus"></i>
            <p>Create story</p>
          </div>

          <div id="mind">
            <div>
              <img src="https://scontent.fbom2-2.fna.fbcdn.net/v/t39.30808-1/271625882_108868848347455_4875065016885278752_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qc1LsOAe6LIAX870qnn&_nc_ht=scontent.fbom2-2.fna&oh=00_AfD9KllFcFkR-ffgU9dUgm7l7j2VdwHLJa_UluwtxOdyqw&oe=64E29FB8" />
              <input
                onClick={openCreate}
                placeholder="What's on your mind, Poohh?"
              />
            </div>
            <div>
              <div>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png" />
                <p>Live video</p>
              </div>
              <div>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png" />
                <p>Photo/video</p>
              </div>
              <div>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png" />
                <p>Feeling/activity</p>
              </div>
            </div>
          </div>

          <div id="content">
            <div>
              <div>
                <div>
                  <img src="https://scontent.fbom2-2.fna.fbcdn.net/v/t39.30808-1/352176171_784266519915044_6663670722271169846_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=gvzOTj4Hk-wAX_WwnBa&_nc_ht=scontent.fbom2-2.fna&oh=00_AfDKvNGBfANJQWGajmzaDzIyk1M7EG-kazjL9_LzqxzMEg&oe=64E1A4CC" />
                </div>
                <div>
                  <span> Demon Slayer: Kimetsu no Yaiba</span>
                  <span style={{ color: "#1d9bf0", marginLeft: "5px" }}>
                    <i class="fa-solid fa-certificate"></i>
                  </span>
                  <p>6h</p>
                </div>
                <div>
                  <i class="fa-solid fa-ellipsis fa-xl"></i>
                  <i class="fa-solid fa-xmark fa-xl"></i>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Ouch 😵 All episodes of Demon Slayer: Kimetsu no Yaiba
                    Swordsmith Village Arc are streaming now subbed and dubbed
                    only on Crunchyroll ✨
                  </p>
                  <img src="https://scontent.fbom2-2.fna.fbcdn.net/v/t39.30808-6/366967109_698771265626544_4635009622306671818_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=K62qbmPq7rwAX91s_ZP&_nc_ht=scontent.fbom2-2.fna&oh=00_AfAM-2A1JyiZs-UYiOllrFDVHs3u49YNaDJZOTRQwEoTUw&oe=64E2B498" />
                </div>
                <div>
                  <span>
                    <i class="fa-regular fa-comment"></i>
                    <span>174</span>
                  </span>
                  <span>
                    <i class="fa-solid fa-retweet"></i>
                    <span>1023</span>
                  </span>
                  <span>
                    <i>
                      <i class="fa-regular fa-heart"></i>
                    </i>
                    <span>75,51,255</span>
                  </span>
                  <span>
                    <i class="fa-sharp fa-solid fa-chart-simple"></i>
                    <span>783.9k</span>
                  </span>
                  <span>
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <img src="https://scontent.fbom2-2.fna.fbcdn.net/v/t39.30808-1/352176171_784266519915044_6663670722271169846_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=gvzOTj4Hk-wAX_WwnBa&_nc_ht=scontent.fbom2-2.fna&oh=00_AfDKvNGBfANJQWGajmzaDzIyk1M7EG-kazjL9_LzqxzMEg&oe=64E1A4CC" />
                </div>
                <div>
                  <span> Demon Slayer: Kimetsu no Yaiba</span>
                  <span style={{ color: "#1d9bf0", marginLeft: "5px" }}>
                    <i class="fa-solid fa-certificate"></i>
                  </span>
                  <p>6h</p>
                </div>
                <div>
                  <i class="fa-solid fa-ellipsis fa-xl"></i>
                  <i class="fa-solid fa-xmark fa-xl"></i>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Ouch 😵 All episodes of Demon Slayer: Kimetsu no Yaiba
                    Swordsmith Village Arc are streaming now subbed and dubbed
                    only on Crunchyroll ✨
                  </p>
                  <img src="https://scontent.fbom2-2.fna.fbcdn.net/v/t39.30808-6/366967109_698771265626544_4635009622306671818_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=K62qbmPq7rwAX91s_ZP&_nc_ht=scontent.fbom2-2.fna&oh=00_AfAM-2A1JyiZs-UYiOllrFDVHs3u49YNaDJZOTRQwEoTUw&oe=64E2B498" />
                </div>
                <div>
                  <span>
                    <i class="fa-regular fa-comment"></i>
                    <span>174</span>
                  </span>
                  <span>
                    <i class="fa-solid fa-retweet"></i>
                    <span>1023</span>
                  </span>
                  <span>
                    <i>
                      <i class="fa-regular fa-heart"></i>
                    </i>
                    <span>75,51,255</span>
                  </span>
                  <span>
                    <i class="fa-sharp fa-solid fa-chart-simple"></i>
                    <span>783.9k</span>
                  </span>
                  <span>
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div id="third">
        <p>Group conversations</p>
        <div>
          <i class="fa-solid fa-plus"></i>
          <p>Create new group</p>
        </div>
      </div>

      {createPost ? (
        <div id="createbody">
          <div id="createpost">
            <div>
              <p>Create post</p>
              <i onClick={closeCreate} class="fa-solid fa-xmark"></i>
            </div>
            <div>
              <img src="https://scontent.fbom2-2.fna.fbcdn.net/v/t39.30808-1/271625882_108868848347455_4875065016885278752_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=104&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=qc1LsOAe6LIAX870qnn&_nc_ht=scontent.fbom2-2.fna&oh=00_AfAMBQdjRdryKbXSFqKr-DBxDk79RspiVWiWSfJpntSq2w&oe=64E29FB8" />
              <p>Poohh Art</p>
            </div>
            <div>
              <p>What's on your mind, Poohh?</p>
            </div>
            <div>
              <img src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" />
              <i class="fa-regular fa-face-smile fa-xl"></i>
            </div>
            <div>
              <p>Add to your post</p>
            </div>
            <div>
              <button>Post</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
