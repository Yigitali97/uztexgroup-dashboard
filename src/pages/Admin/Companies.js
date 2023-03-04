import * as React from "react";
import styled from "styled-components";
import { useMutation } from "react-query";
import { API } from "../../services/api";
import { toast } from "react-toastify";
import DeleteConfirmation from "../../components/DeleteConfirmation";

export default function Companies({ data, isLoading, refetch }) {
  const { mutate } = useMutation(async (payload) => {
    await API.deleteCompany(payload)
      .then((res) => {
        toast.success("Malumot o'chirildi!");
        refetch();
      })
      .catch((err) => toast.error("Malumot o'chirishda xatolik!"));
  });

  return (
    <React.Fragment>
      <Table>
        <div className="header">
          <h2>Kompaniyalar nomi</h2>
        </div>
        <div className="body">
          {!isLoading &&
            !!data.length &&
            data.map((row) => (
              <div className="item" key={row.id}>
                <p>{row.name}</p>

                <DeleteConfirmation data={row.id} mutate={mutate} />
              </div>
            ))}
        </div>
      </Table>
    </React.Fragment>
  );
}

const Table = styled.div`
  /* background-color: red; */
  .header {
    /* background-color: green; */
    border-bottom: 1px solid gray;
    padding: 0px 10px;
  }
  .body {
    /* background-color: yellow; */
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    border-bottom: 1px solid gray;
  }
`;
