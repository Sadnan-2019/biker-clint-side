import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddReview = () => {
    const [user,loading,error] = useAuthState(auth);

  return (
    <div>
      
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body px-5">
                <h1 className="font-bold text-2xl">Add your review</h1>
              <form>
                
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Name"
                    class="input input-bordered"
                    value={user?.displayName}
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Review</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Type Review"
                    class="input input-bordered"
                    name="review"
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Rating</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Type Review"
                    class="input input-bordered"
                    name="rating"
                    required
                  />
                </div>
              

                <div class="form-control mt-6">
                  <input class="btn btn-primary" type="submit" value="Order" />
                </div>
              </form>
            </div>
          </div>
        </div>
      
  );
};

export default AddReview;
